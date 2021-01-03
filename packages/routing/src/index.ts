interface Request<Route extends string = ''>  {
    params: ParseRouteToParams<Route>
}

interface Response {}

type ParseRouteToParams<R extends string>
    = R extends `${infer LS}/${infer RS}`
        ? ParseRouteToParams<LS> & ParseRouteToParams<RS>
        : R extends `{${infer P}}`
        ? Record<P, string>
        : {}

declare class App {
    get<R extends string>(route: R, func: (req: Request<R>, res: Response) => void): this;
}



export { App }

type U = Request<"/{name}">["params"] // string