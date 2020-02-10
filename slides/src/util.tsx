import React, { useState, useEffect } from "react";
import {
  ComponentPlayground,
  Deck,
  Slide,
  Heading,
  SlideSet,
  List,
  ListItem,
  Fill,
  Text as SText,
  Image,
  Appear,
  CodePane,
} from "spectacle";

import * as mobx from "mobx";
import * as mutils from "mobx-utils";
import { observer } from "mobx-react";

interface HeadingsProps {
  heading: string;
  subheading?: string;
}

export const Headings: React.FC<HeadingsProps> = (props) => {
  return (
    <>
      <Heading size={5} caps textColor="secondary">
        {props.heading}
      </Heading>
      {props.subheading && (
        <Heading size={6} caps textColor="tertiary">
          {props.subheading}
        </Heading>
      )}
    </>
  );
};

export interface MyTextProps {}

export const Text: React.FC<MyTextProps> = (props) => {
  return <SText textColor="secondary">{props.children}</SText>;
};

export interface MyPlaygroundProps {
  code: string;
}

export const Playground: React.FC<MyPlaygroundProps> = (props) => {
  return (
    <div style={{ marginTop: "16px" }}>
      <ComponentPlayground
        scope={{
          useState,
          useEffect,
          mobx,
          mutils,
          observer,
        }}
        language="tsx"
        code={props.code}
        previewBackgroundColor="#464646"
      />
    </div>
  );
};

const AppearingListComponent: React.FC = (props) => {
  return (
    <List>
      {React.Children.map(props.children, (child) => (
        <Appear>{child}</Appear>
      ))}
    </List>
  );
};

export const AppearingList = List;
