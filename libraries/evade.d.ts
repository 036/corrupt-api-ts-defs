declare class evade {
    isActive: boolean;
    spells: evadeSkillshot[];
    /** @noSelf **/
    isPositionSafe( position: vec3 ): boolean
    /** @noSelf **/
    isPathSafe( position: vec3, speed: number, delay: number, unit: aiBaseClient ): boolean
    /** @noSelf **/
    isAboutToHit( time: number, unit: aiBaseClient ): boolean
    /** @noSelf **/
    setEnabled( enabled: boolean ): void
    /** @noSelf **/
    getEnabled( ): boolean
    load( ): void
    unload( ): void
}

declare global {
    const evade : evade;
}

export {};