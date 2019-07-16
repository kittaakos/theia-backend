import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";
import { WorkspaceService } from './hello-world-service';

export const HelloWorldExtensionCommand = {
    id: 'HelloWorldExtension.command',
    label: "Shows a message"
};

@injectable()
export class HelloWorldExtensionCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
        @inject(WorkspaceService) protected readonly workspaceService: WorkspaceService
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(HelloWorldExtensionCommand, {
            execute: () => {
                this.messageService.info('Hello World!')
            }
        });
    }
}

@injectable()
export class HelloWorldExtensionMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: HelloWorldExtensionCommand.id,
            label: 'Say Hello'
        });
    }
}