// src/routes/+layout.js
import posthog from 'posthog-js'
import { browser } from '$app/environment';
import { PUBLIC_POSTHOG_API } from '$env/static/public';

export const load = async () => {

  if (browser) {
    posthog.init(
      PUBLIC_POSTHOG_API,
      {
        api_host:'https://us.posthog.com',
        capture_pageview: true,
        capture_pageleave: false
      }
    )
  }
  return
};