import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
export default function MetaData({ title }) {
  return (
    <Fragment>
      <Helmet>
        <title>{`${title} - Shop IT`}</title>
      </Helmet>
    </Fragment>
  );
}
