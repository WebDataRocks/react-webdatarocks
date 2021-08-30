declare module 'react-flexmonster/hooks' {
    
    export type WebDataRocksReference = {
        readonly webdatarocks: () => WebDataRocks.Pivot;
    }

    export type PivotComponentProps<TParams = {}> = Partial<WebDataRocks.Params> & {
        ref?: React.RefObject<WebDataRocksReference>;
    };    

    export const Pivot: React.FunctionComponent<PivotComponentProps>

}

