declare class fs {
    scriptPath: string;
    configPath: string;

    /** @noSelf **/
    createFolder( directoryPath: string ): boolean
    /** @noSelf **/
    getFiles( directoryPath: string, extension: string ): LuaTable
}

declare global {
    const fs : fs;
}

export {};