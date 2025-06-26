'use client'
import './globals.css?url'
import {createRootRoute, Outlet} from "@tanstack/react-router";
import {Scripts} from "@tanstack/react-start";
import {Person5Filled} from "@fluentui/react-icons";
import {useEffect, useState} from "react";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { title: "Test" }
        ],
    }),
    component: RootLayout,
})


function RootLayout() {

    return (
          <html lang="en">
          <body>
            <Scripts />
            <Outlet />
          </body>
          </html>
  );
}
