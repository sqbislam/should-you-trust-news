import React, { createElement } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { AppRoutes } from "../../core/routes/routes";
import { mapObject } from "../../core/utils/helpers";

interface IRouterMapperProps {}

const RouterMapper: React.FunctionComponent<IRouterMapperProps> = (props) => {
  return (
    <>
      <Switch>
        {mapObject(AppRoutes, (route, key) => {
          let renderCandidate: React.ComponentType<any> = route.component;
          const component = createElement(renderCandidate, {});
          return <Route path={route.path} element={component} key={key} />;
        })}
      </Switch>
    </>
  );
};

export default RouterMapper;
