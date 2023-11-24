/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {Provider} from '@lexical/yjs';
// @ts-ignore
import {WebsocketProvider} from 'y-websocket';
import {Doc} from 'yjs';

// const url = new URL(window.location.href);
// const params = new URLSearchParams(url.search);
const WEBSOCKET_ENDPOINT = "";
const WEBSOCKET_SLUG = 'malda-rte';
const WEBSOCKET_ID = '0';

// parent dom -> child doc
export function createWebsocketProvider(
  id: string,
  yjsDocMap: Map<string, Doc>,
): Provider {
  let doc = yjsDocMap.get(id);

  if (doc === undefined) {
    doc = new Doc();
    yjsDocMap.set(id, doc);
  } else {
    doc.load();
  }

  // @ts-ignore
  return new WebsocketProvider(
    WEBSOCKET_ENDPOINT,
    WEBSOCKET_SLUG + '/' + WEBSOCKET_ID + '/' + id,
    doc,
    {
      connect: false,
    },
  );
}
