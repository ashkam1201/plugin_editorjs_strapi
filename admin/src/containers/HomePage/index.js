/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import EditorJs from "@natterstefan/react-editor-js";

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Welcome to the plugin Editor JS in strapi !</p>
      <p>You can test it right bellow!</p>
      <EditorJs></EditorJs>
    </div>
  );
};

export default memo(HomePage);
