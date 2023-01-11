import { combineComponents } from "./combineComponents";

type components = {
    readonly components: React.ComponentType<any>[];
    readonly props: any;
}


const components = [Provider1, Provider2, Provider3];

export const ContextProvider = combineComponents({
    components,
    props: { value: "value" },
});


