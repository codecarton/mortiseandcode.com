---
active: true
title: 'When 421 is not less than 1700'
date: '2024-07-11'
#updated: ''
categories:
  - 'programming'
coverImage: 'paywall-bug-banner.jpg'
coverWidth: 16
coverHeight: 9
coverPhotoCredited: true
coverSource: 'https://unsplash.com/photos/black-laptop-computer-turned-on-showing-music-player-Bss5nhYnLKU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
coverAuthor: 'Amza Andrei'
coverAuthorSource: 'https://unsplash.com/@andreiamza2000?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
excerpt: 'Recently, I updated One16 from paid upfront to freemium.  When implementing the change I had to develop a CustomerManager to handle any grandfathered users that purchased the app before the switch was made.  Ensuring they continued to get all the features for free.'
preview: 'Recently, I updated One16 from paid upfront to freemium.  When implementing the change I had to develop a CustomerManager to handle any grandfathered users that purchased the app before the switch was made.  Ensuring they continued to get all the features for free.'
---

Recently, I updated [One16](https://codecarton.com/one16) from paid upfront to freemium. When implementing the change I had to develop a `CustomerManager` to handle any grandfathered users that purchased the app before the switch was made. Ensuring they continued to get all the features for free.

The most common way to make this check is get the users receipt data from Apple and compare their purchased build version to the build when the business model changed. In my case this build was 1700. And unfortunately, I had a bug in the `CustomerManger` that meant many users were not able to unlock pro features for free. Making it a stressful rollout, to say the least.

## The Bug

When developing features that require integration into Apple’s receipts, In-App purchases, and TestFlight it can be **extremely** difficult to test all edge cases before shipping the app.

For example, the `originalBuildVerison` returned from Apple in a non-production environment is always 1.0. This isn’t helpful when you want verify how the build version comes back from app is presented.

Nonetheless, I pushed forward and created a simple check in my code:

```swift
let grandfatheredBuild  = "1700"
let originalApplicationVersion = customerInfo.originalApplicationVersion

if let originalApplicationVersion, grandfatheredBuild > originalApplicationVersion && originalApplicationVersion != "1.0" {
    return true
}
```

And here is my big little mistake. Apple returns the version as a string. In my testing my build (120) was indeed less than "1700". However, Swift does not compare strings like Ints or Doubles (obviously).

This passed my testing when using my receipt, and so I shipped the update to the App Store.

Within hours of the update going live I had emails from customers sharing the issue with me. Thankfully, they were all patient and understanding. They were able to send me screenshots of specific details that allowed me get the bug fixed and shipped to the App Store within hours.

## How Swift Compares Strings

Swift compares strings in **lexicographical** order. Using their Unicode value as the basis of comparison.

> Lexicographical Order is comparing each character one by one left to right.

What this means for our example is 140, in unicode values is `49`, `52`, `48`. 1700 is `49`, `55`, `48`, `48`.

If we are comparing these values in lexicographical order, the first number is equal and moves onto the next value. `52` is less than `55`; therefore, my code returned true.

What about 421? Well the unicode is `52`, `50`, `49`. See the problem?

`52` is greater than `49`. Therefore, the manager is returning false and telling the app not to unlock the features. Not what we wanted!

## The Solution

The fix was a simple one. Convert the strings into an `integer ` so the comparison could be made as expected.

Unfortunately, this lead to another issue. In test environments the build is "1.0" and converting "1.0" to an Int results in a nil value.

There are several ways to handle this, but I decided on converting the build version to a double and making the comparison that way.

## Takeaways

This bug never should have happened. I know better than to compare strings like I did. But these things sometimes slip through the cracks and mistakes happen. Tests should have been in place to verify functionality more exhaustively.

Thankfully, we have amazing customers that reached out immediately and we were able to get the problem fixed quickly.

Apple’s page to [request expedited review](https://developer.apple.com/contact/app-store/?topic=expedite) worked as expected for us. Getting the new build out to users quickly.

Though this experience was stressful I enjoyed getting to talk to some of our customers. Hearing how the app has improved their workflows was a delight.
