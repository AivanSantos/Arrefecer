import { nanoid } from 'nanoid';

export function generateNonce() {
  return nanoid();
}

export function addNoncesToScripts(html: string, nonce: string) {
  return html.replace(/<script/g, `<script nonce="${nonce}"`);
} 