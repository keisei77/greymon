class Perfect {
    constructor(perfect) {
        this.assembly = null;
        this.registeredActions = null;
        this.register = (assembly) => {
            this.registeredActions = Object.entries(assembly)
                .map(([part, registration]) => {
                return registration.actions.map((action) => ({
                    // action.name => 'bound run'
                    [action.name.slice(6)]: action,
                }));
            })
                .reduce((prev, acc) => {
                const parsedAcc = acc.reduce((p, a) => {
                    const actionName = Object.keys(a)[0];
                    p[actionName] = a[actionName];
                    return p;
                }, {});
                prev = { ...prev, ...parsedAcc };
                return prev;
            }, {});
            return this;
        };
        /**
         *
         * @param actions: string[]
         *
         * perfect.act(['nod', 'run']);
         */
        this.act = (actions) => {
            actions.forEach((action) => {
                this.registeredActions[action](this);
            });
            return this;
        };
        this.getActions = () => {
            return this.registeredActions;
        };
        this.assembly = perfect;
        this.register(this.assembly);
    }
}

const greymon = {
    Perfect,
};

export default greymon;
//# sourceMappingURL=index.js.map
