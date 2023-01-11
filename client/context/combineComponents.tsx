interface Props {
    components: React.ComponentType<any>[];
    props: any;
}

export const combineComponents = ({ components, props }: Props) => ( { children }: any ) => {
    return components.reduce(
        (children, Parent) => <Parent {...props}>{children}</Parent>,
        children
    );
};
