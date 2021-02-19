import {
  mdiCashMultiple,
  mdiGithub
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <Icon path={mdiCashMultiple} size="1.2rem" color="white" />
          </span>
          <span className="ml-3 text-xl">Fork of&nbsp; 
            <a
            href="https://onethousand.in/"
            rel="noopener noreferrer"
            target="_blank">onethousand.in</a></span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Added India Specific stocks to onethousand.in. Thanks to&nbsp;
          <a
            href="https://onethousand.in/"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @IPOBrief
          </a>
          &nbsp;
          &amp;
          &nbsp;
          <a
            href="https://www.linkedin.com/in/miguelncorreia/"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Miguel
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          

          <a
            className="ml-3 text-gray-500"
            href="https://github.com/sircon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon path={mdiGithub} size="1.2rem" />
          </a>

          

          
        </span>
      </div>
    </footer>
  );
};
