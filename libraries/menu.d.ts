
declare class menu {
    /** @noSelf **/
    create(key: string, displayName: string): menu
    /** @noSelf **/
    delete(key: string): void
    header(key: string, displayName: string): menu
    hide(value: boolean): void
    boolean(
        key: string,
        displayName: string,
        defaultValue: boolean,
        callback?: ((menuElementObj: menuElement, value: boolean) => void)
    ): menuElement
    slider(
        key: string,
        displayName: string,
        defaultValue: number,
        minValue: number,
        maxValue: number,
        step: number,
        callback?: ((menuElementObj: menuElement, value: number) => void)
    ): menuElement
    sliderDecimal(
        key: string,
        displayName: string,
        defaultValue: number,
        minValue: number,
        maxValue: number,
        step: number,
        callback?: | ((menuElementObj: menuElement, value: number) => void)
    ): menuElement
    keybind(
        key: string,
        displayName: string,
        vKey: number | string,
        defaultValue: boolean,
        isToggle: boolean,
        callback?: | ((menuElementObj: menuElement, value: boolean) => void)
    ): menuElement
    list(
        key: string,
        displayName: string,
        items: string[],
        defaultValue: number,
        callback?: ((menuElementObj: menuElement, value: number) => void)
    ): menuElement
    color(
        key: string,
        displayName: string,
        defaultValue: number,
        callback?: ((menuElementObj: menuElement, value: number) => void)
    ): menuElement
    get(key: string): menuElement
    spacer(key: string, displayName: string): menuElement
    hide( value: boolean ) : void
    isopen() : boolean
}

declare global {
    const menu: menu;
}

export {};
