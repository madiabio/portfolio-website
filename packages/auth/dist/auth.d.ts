export declare const auth: import("better-auth/*").Auth<{
    database: (options: import("better-auth/*").BetterAuthOptions) => import("better-auth/*").DBAdapter<import("better-auth/*").BetterAuthOptions>;
    secret: string | undefined;
    baseUrl: string | undefined;
    socialProviders: {
        github: {
            clientId: string;
            clientSecret: string;
        };
    };
}>;
//# sourceMappingURL=auth.d.ts.map