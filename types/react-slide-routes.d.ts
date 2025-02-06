declare module 'react-slide-routes' {
    import * as React from 'react';
    import { Location } from 'react-router-dom';
  
    export interface SlideRoutesProps {
      animation?: string;
      duration?: number;
      timing?: string;
      destroy?: boolean;
      compare?: (a: string, b: string) => number;
      location: Location;
      pathList: string[];
      children?: React.ReactNode;
    }
  
    const SlideRoutes: React.FC<SlideRoutesProps>;
    export default SlideRoutes;
  }
  