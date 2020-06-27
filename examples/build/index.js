const constructorFactory = (Cls) => (args) => {
    return new Cls(args);
};

class Base {
    constructor({ descriptor, actions }) {
        this.descriptor = null;
        this.actions = [];
        this.descriptor = descriptor;
        this.actions = actions.map((action) => action.bind(this));
    }
}

class Head extends Base {
}
var head = constructorFactory(Head);

class Body extends Base {
}
var body = constructorFactory(Body);

class Arms extends Base {
}
var arms = constructorFactory(Arms);

class Feet extends Base {
}
var feet = constructorFactory(Feet);

class Legs extends Base {
}
var legs = constructorFactory(Legs);

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
        /**
         *
         *
         * @memberof Perfect
         */
        this.getActions = () => {
            return this.registeredActions;
        };
        /**
         *
         *
         * @memberof Perfect
         */
        this.getDescriptors = () => {
            return Object.entries(this.assembly).map(([part, { descriptor }]) => ({
                [part]: descriptor,
            }));
        };
        this.assembly = perfect;
        this.register(this.assembly);
    }
}

const greymon = {
    Perfect,
};

export default greymon;
export { arms as Arms, body as Body, feet as Feet, head as Head, legs as Legs };
//# sourceMappingURL=index.js.map
