/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { injectable, inject } from "inversify";

import { WorkspaceServer } from "../common";

/**
 * The workspace service.
 */
@injectable()
export class WorkspaceService {

    /**
     * The current workspace root.
     */

     request:any;
    constructor(
        @inject(WorkspaceServer) protected readonly server: WorkspaceServer
    ) {
        console.log('service - constructor');
        console.log(this.server.getRequest());
    }

    /**
     * Open a given URI as the current workspace root.
     */
     getRequest(): Promise<string> {
        console.log('service - getRequest called!');
        console.log(this.server);
        return this.server.getRequest();
    }

    setRequest(): void {
        console.log('service - setRequest called!');
        this.server.setRequest('test');
    }
}

export interface WorkspaceInput {
    /**
     * Test whether the same window should be used, by default false.
     */
    preserveWindow?: boolean;
   }
