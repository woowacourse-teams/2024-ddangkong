/**
 * @note The block below contains polyfills for Node.js globals
 * required for Jest to function when running JSDOM tests.
 */

const { TextDecoder, TextEncoder } = require('node:util');
const { ReadableStream, TransformStream } = require('node:stream/web');

if (!globalThis.TextDecoder) {
  globalThis.TextDecoder = TextDecoder;
}
if (!globalThis.TextEncoder) {
  globalThis.TextEncoder = TextEncoder;
}
if (!globalThis.ReadableStream) {
  globalThis.ReadableStream = ReadableStream;
}
if (!globalThis.TransformStream) {
  globalThis.TransformStream = TransformStream;
}

const { Blob, File } = require('node:buffer');
const { fetch, Headers, FormData, Request, Response } = require('undici');

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}
if (!globalThis.Blob) {
  globalThis.Blob = Blob;
}
if (!globalThis.File) {
  globalThis.File = File;
}
if (!globalThis.Headers) {
  globalThis.Headers = Headers;
}
if (!globalThis.FormData) {
  globalThis.FormData = FormData;
}
if (!globalThis.Request) {
  globalThis.Request = Request;
}
if (!globalThis.Response) {
  globalThis.Response = Response;
}

if (!globalThis.BroadcastChannel) {
  globalThis.BroadcastChannel = class {
    constructor(name) {
      this.name = name;
      this.onmessage = null;
    }
    postMessage(message) {
      if (this.onmessage) {
        this.onmessage({ data: message });
      }
    }
    close() {}
  };
}
