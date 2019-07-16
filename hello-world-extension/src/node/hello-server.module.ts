import { ContainerModule } from 'inversify';
import { ConnectionHandler, JsonRpcConnectionHandler } from "@theia/core/lib/common";
import { WorkspaceServer, workspacePath } from '../common';
import { DefaultWorkspaceServer } from './default-workspace-server';

export default new ContainerModule(bind => {
	bind(DefaultWorkspaceServer).toSelf().inSingletonScope();
    bind(WorkspaceServer).toService(DefaultWorkspaceServer);
    bind(ConnectionHandler).toDynamicValue(ctx =>
        new JsonRpcConnectionHandler(workspacePath, () => {
        	ctx.container.get(WorkspaceServer)
        })
    ).inSingletonScope()
});