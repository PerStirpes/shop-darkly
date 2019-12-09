[![CircleCI](https://circleci.com/gh/PerStirpes/store/tree/master.svg?style=svg&circle-token=5b3df9cad16dc227ff2b88e31e87743a43cbd78e)](https://circleci.com/gh/PerStirpes/store/tree/master)

<p align="center">
  <a href="https://laucnhdarkly.com">
    <img alt="LaunchDarkly" src="https://launchdarkly.com/img/favicon.ico" width="60" />
  </a>
</p>
<h1 align="center">
  LaunchDarkly <a href="https://store.launchdarkly.com">Swag Store</a>
</h1>

## How to run

Install the Gatsby CLI

```bash
npm i -g gatsby-cli
```

Install Yarn

[https://yarnpkg.com/en/docs/install#mac-stable](https://yarnpkg.com/en/docs/install#mac-stable)

Install dependencies with Yarn

```bash
yarn
```

Run the `develop` command

```bash
gatsby develop
```

This will query the shopify api, optimize images, and launch a dev server!
Any style changes should live-reload.

## Notes

- alt text is _required_ for each image on shopify

This is the LaunchDarkly store, where we make swag, stickers, and other LaunchDarkly goodies available to contributors and LaunchDarkly enthusiasts. 💪💜

See it live: [ldswag.now.sh](https://ldswag.now.sh)

## Technical Overview

This store is built with data from:

- [Shopify](https://shopify.com)
- The [Shopify JavaScript Buy SDK](https://shopify.github.io/js-buy-sdk/)

We’re using [Gatsby V2](https://github.com/gatsbyjs/gatsby) and [Emotion](https://emotion.sh/) to get the data on screen.

The store is statically rendered using the Shopify source plugin,

## Contributors

design socks
https://www.sockclub.com/

Pick Icons
https://react-icons.netlify.com/#/

## Cheap Swag for All

We sell our swag at pretty close to cost (we round for easy math) and we don’t charge shipping fees. Grab a t-shirt or socks and show everyone your favorite blazing fast framework!

## Frequently Asked Questions

<details>
  <summary><strong>Why does it say I'm not eligible when I enter the discount code?</strong></summary>

&nbsp; <!-- leave this here to avoid smashing the text against the summary -->

Try opening the store in an incognito window and then proceed to check out. When checking out, make sure you're using the same email that's listed on your GitHub account.

</details>

<details>
  <summary><strong>Why won't my credit card work?</strong></summary>

&nbsp; <!-- leave this here to avoid smashing the text against the summary -->

Please make sure the card isn't frozen or otherwise blocked by your financial institution. If it's not that, please send us an email to team@LaunchDarklyjs.com if you're unable to pay with your credit card.

</details>

<details>
  <summary><strong>I've been waiting for my package, but it hasn't arrived yet.</strong></summary>

&nbsp; <!-- leave this here to avoid smashing the text against the summary -->

International shipments can take up to 6 weeks to be delivered. 😱 Tracking updates may not always show up in real time on your tracking link. If you still have not received your order at the end of 6 weeks, please let us know by sending an email to team@LaunchDarklyjs.com, and we'll see how we can help!

</details>

<details>
  <summary><strong>I wanted to order something but it's out. How long will it take before it's back in stock?</strong></summary>

&nbsp; <!-- leave this here to avoid smashing the text against the summary -->

Some of the swag has been selling like hotcakes (only less tasty and a providing a bit more coverage). Once an item is out, it takes us about 3 weeks for it to get back in stock.

</details>

<details>
  <summary><strong>The delivery service is telling me I need to pay additional fees to get my order. I thought LaunchDarkly covered shipping costs. What gives?</strong></summary>

&nbsp; <!-- leave this here to avoid smashing the text against the summary -->

On some international orders, customs will add additional taxes, duties, and other fees. This is unpredictable, and we have no way of knowing if or when it will happen, or how much it will be. If this happens to you, there is, unfortunately, nothing else LaunchDarkly can do. You are responsible for paying any additional fees imposed as part of the customs process. Thanks for your understanding!

</details>
