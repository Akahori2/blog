// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IAuthorFields {
  /** Name */
  name?: string | undefined;

  /** Image */
  image?: Asset | undefined;
}

export interface IAuthor extends Entry<IAuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "author";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPostFields {
  /** title */
  title?: string | undefined;

  /** sub title */
  subTitle?: string | undefined;

  /** slug */
  slug?: string | undefined;

  /** date */
  date?: string | undefined;

  /** author */
  author?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** coverImage */
  coverImage?: Asset | undefined;

  /** content */
  content?: string | undefined;
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "author" | "post";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
