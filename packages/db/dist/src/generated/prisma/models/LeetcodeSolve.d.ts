import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model LeetcodeSolve
 *
 */
export type LeetcodeSolveModel = runtime.Types.Result.DefaultSelection<Prisma.$LeetcodeSolvePayload>;
export type AggregateLeetcodeSolve = {
    _count: LeetcodeSolveCountAggregateOutputType | null;
    _avg: LeetcodeSolveAvgAggregateOutputType | null;
    _sum: LeetcodeSolveSumAggregateOutputType | null;
    _min: LeetcodeSolveMinAggregateOutputType | null;
    _max: LeetcodeSolveMaxAggregateOutputType | null;
};
export type LeetcodeSolveAvgAggregateOutputType = {
    id: number | null;
    problemNumber: number | null;
    durationMin: number | null;
};
export type LeetcodeSolveSumAggregateOutputType = {
    id: number | null;
    problemNumber: number | null;
    durationMin: number | null;
};
export type LeetcodeSolveMinAggregateOutputType = {
    id: number | null;
    problemNumber: number | null;
    problemName: string | null;
    difficulty: string | null;
    durationMin: number | null;
    solvedAt: Date | null;
    createdAt: Date | null;
};
export type LeetcodeSolveMaxAggregateOutputType = {
    id: number | null;
    problemNumber: number | null;
    problemName: string | null;
    difficulty: string | null;
    durationMin: number | null;
    solvedAt: Date | null;
    createdAt: Date | null;
};
export type LeetcodeSolveCountAggregateOutputType = {
    id: number;
    problemNumber: number;
    problemName: number;
    difficulty: number;
    durationMin: number;
    solvedAt: number;
    createdAt: number;
    _all: number;
};
export type LeetcodeSolveAvgAggregateInputType = {
    id?: true;
    problemNumber?: true;
    durationMin?: true;
};
export type LeetcodeSolveSumAggregateInputType = {
    id?: true;
    problemNumber?: true;
    durationMin?: true;
};
export type LeetcodeSolveMinAggregateInputType = {
    id?: true;
    problemNumber?: true;
    problemName?: true;
    difficulty?: true;
    durationMin?: true;
    solvedAt?: true;
    createdAt?: true;
};
export type LeetcodeSolveMaxAggregateInputType = {
    id?: true;
    problemNumber?: true;
    problemName?: true;
    difficulty?: true;
    durationMin?: true;
    solvedAt?: true;
    createdAt?: true;
};
export type LeetcodeSolveCountAggregateInputType = {
    id?: true;
    problemNumber?: true;
    problemName?: true;
    difficulty?: true;
    durationMin?: true;
    solvedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type LeetcodeSolveAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LeetcodeSolve to aggregate.
     */
    where?: Prisma.LeetcodeSolveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeetcodeSolves to fetch.
     */
    orderBy?: Prisma.LeetcodeSolveOrderByWithRelationInput | Prisma.LeetcodeSolveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LeetcodeSolveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeetcodeSolves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeetcodeSolves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LeetcodeSolves
    **/
    _count?: true | LeetcodeSolveCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LeetcodeSolveAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LeetcodeSolveSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LeetcodeSolveMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LeetcodeSolveMaxAggregateInputType;
};
export type GetLeetcodeSolveAggregateType<T extends LeetcodeSolveAggregateArgs> = {
    [P in keyof T & keyof AggregateLeetcodeSolve]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeetcodeSolve[P]> : Prisma.GetScalarType<T[P], AggregateLeetcodeSolve[P]>;
};
export type LeetcodeSolveGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeetcodeSolveWhereInput;
    orderBy?: Prisma.LeetcodeSolveOrderByWithAggregationInput | Prisma.LeetcodeSolveOrderByWithAggregationInput[];
    by: Prisma.LeetcodeSolveScalarFieldEnum[] | Prisma.LeetcodeSolveScalarFieldEnum;
    having?: Prisma.LeetcodeSolveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeetcodeSolveCountAggregateInputType | true;
    _avg?: LeetcodeSolveAvgAggregateInputType;
    _sum?: LeetcodeSolveSumAggregateInputType;
    _min?: LeetcodeSolveMinAggregateInputType;
    _max?: LeetcodeSolveMaxAggregateInputType;
};
export type LeetcodeSolveGroupByOutputType = {
    id: number;
    problemNumber: number;
    problemName: string;
    difficulty: string;
    durationMin: number;
    solvedAt: Date;
    createdAt: Date;
    _count: LeetcodeSolveCountAggregateOutputType | null;
    _avg: LeetcodeSolveAvgAggregateOutputType | null;
    _sum: LeetcodeSolveSumAggregateOutputType | null;
    _min: LeetcodeSolveMinAggregateOutputType | null;
    _max: LeetcodeSolveMaxAggregateOutputType | null;
};
type GetLeetcodeSolveGroupByPayload<T extends LeetcodeSolveGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeetcodeSolveGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeetcodeSolveGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeetcodeSolveGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeetcodeSolveGroupByOutputType[P]>;
}>>;
export type LeetcodeSolveWhereInput = {
    AND?: Prisma.LeetcodeSolveWhereInput | Prisma.LeetcodeSolveWhereInput[];
    OR?: Prisma.LeetcodeSolveWhereInput[];
    NOT?: Prisma.LeetcodeSolveWhereInput | Prisma.LeetcodeSolveWhereInput[];
    id?: Prisma.IntFilter<"LeetcodeSolve"> | number;
    problemNumber?: Prisma.IntFilter<"LeetcodeSolve"> | number;
    problemName?: Prisma.StringFilter<"LeetcodeSolve"> | string;
    difficulty?: Prisma.StringFilter<"LeetcodeSolve"> | string;
    durationMin?: Prisma.IntFilter<"LeetcodeSolve"> | number;
    solvedAt?: Prisma.DateTimeFilter<"LeetcodeSolve"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"LeetcodeSolve"> | Date | string;
};
export type LeetcodeSolveOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    problemNumber?: Prisma.SortOrder;
    problemName?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
    solvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeetcodeSolveWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.LeetcodeSolveWhereInput | Prisma.LeetcodeSolveWhereInput[];
    OR?: Prisma.LeetcodeSolveWhereInput[];
    NOT?: Prisma.LeetcodeSolveWhereInput | Prisma.LeetcodeSolveWhereInput[];
    problemNumber?: Prisma.IntFilter<"LeetcodeSolve"> | number;
    problemName?: Prisma.StringFilter<"LeetcodeSolve"> | string;
    difficulty?: Prisma.StringFilter<"LeetcodeSolve"> | string;
    durationMin?: Prisma.IntFilter<"LeetcodeSolve"> | number;
    solvedAt?: Prisma.DateTimeFilter<"LeetcodeSolve"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"LeetcodeSolve"> | Date | string;
}, "id">;
export type LeetcodeSolveOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    problemNumber?: Prisma.SortOrder;
    problemName?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
    solvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LeetcodeSolveCountOrderByAggregateInput;
    _avg?: Prisma.LeetcodeSolveAvgOrderByAggregateInput;
    _max?: Prisma.LeetcodeSolveMaxOrderByAggregateInput;
    _min?: Prisma.LeetcodeSolveMinOrderByAggregateInput;
    _sum?: Prisma.LeetcodeSolveSumOrderByAggregateInput;
};
export type LeetcodeSolveScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeetcodeSolveScalarWhereWithAggregatesInput | Prisma.LeetcodeSolveScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeetcodeSolveScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeetcodeSolveScalarWhereWithAggregatesInput | Prisma.LeetcodeSolveScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"LeetcodeSolve"> | number;
    problemNumber?: Prisma.IntWithAggregatesFilter<"LeetcodeSolve"> | number;
    problemName?: Prisma.StringWithAggregatesFilter<"LeetcodeSolve"> | string;
    difficulty?: Prisma.StringWithAggregatesFilter<"LeetcodeSolve"> | string;
    durationMin?: Prisma.IntWithAggregatesFilter<"LeetcodeSolve"> | number;
    solvedAt?: Prisma.DateTimeWithAggregatesFilter<"LeetcodeSolve"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeetcodeSolve"> | Date | string;
};
export type LeetcodeSolveCreateInput = {
    problemNumber: number;
    problemName: string;
    difficulty: string;
    durationMin: number;
    solvedAt: Date | string;
    createdAt?: Date | string;
};
export type LeetcodeSolveUncheckedCreateInput = {
    id?: number;
    problemNumber: number;
    problemName: string;
    difficulty: string;
    durationMin: number;
    solvedAt: Date | string;
    createdAt?: Date | string;
};
export type LeetcodeSolveUpdateInput = {
    problemNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    problemName?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    durationMin?: Prisma.IntFieldUpdateOperationsInput | number;
    solvedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeetcodeSolveUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    problemNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    problemName?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    durationMin?: Prisma.IntFieldUpdateOperationsInput | number;
    solvedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeetcodeSolveCreateManyInput = {
    id?: number;
    problemNumber: number;
    problemName: string;
    difficulty: string;
    durationMin: number;
    solvedAt: Date | string;
    createdAt?: Date | string;
};
export type LeetcodeSolveUpdateManyMutationInput = {
    problemNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    problemName?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    durationMin?: Prisma.IntFieldUpdateOperationsInput | number;
    solvedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeetcodeSolveUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    problemNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    problemName?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    durationMin?: Prisma.IntFieldUpdateOperationsInput | number;
    solvedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeetcodeSolveCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    problemNumber?: Prisma.SortOrder;
    problemName?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
    solvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeetcodeSolveAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    problemNumber?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
};
export type LeetcodeSolveMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    problemNumber?: Prisma.SortOrder;
    problemName?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
    solvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeetcodeSolveMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    problemNumber?: Prisma.SortOrder;
    problemName?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
    solvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeetcodeSolveSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    problemNumber?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type LeetcodeSolveSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    problemNumber?: boolean;
    problemName?: boolean;
    difficulty?: boolean;
    durationMin?: boolean;
    solvedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["leetcodeSolve"]>;
export type LeetcodeSolveSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    problemNumber?: boolean;
    problemName?: boolean;
    difficulty?: boolean;
    durationMin?: boolean;
    solvedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["leetcodeSolve"]>;
export type LeetcodeSolveSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    problemNumber?: boolean;
    problemName?: boolean;
    difficulty?: boolean;
    durationMin?: boolean;
    solvedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["leetcodeSolve"]>;
export type LeetcodeSolveSelectScalar = {
    id?: boolean;
    problemNumber?: boolean;
    problemName?: boolean;
    difficulty?: boolean;
    durationMin?: boolean;
    solvedAt?: boolean;
    createdAt?: boolean;
};
export type LeetcodeSolveOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "problemNumber" | "problemName" | "difficulty" | "durationMin" | "solvedAt" | "createdAt", ExtArgs["result"]["leetcodeSolve"]>;
export type $LeetcodeSolvePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeetcodeSolve";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        problemNumber: number;
        problemName: string;
        difficulty: string;
        durationMin: number;
        solvedAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["leetcodeSolve"]>;
    composites: {};
};
export type LeetcodeSolveGetPayload<S extends boolean | null | undefined | LeetcodeSolveDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload, S>;
export type LeetcodeSolveCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeetcodeSolveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeetcodeSolveCountAggregateInputType | true;
};
export interface LeetcodeSolveDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeetcodeSolve'];
        meta: {
            name: 'LeetcodeSolve';
        };
    };
    /**
     * Find zero or one LeetcodeSolve that matches the filter.
     * @param {LeetcodeSolveFindUniqueArgs} args - Arguments to find a LeetcodeSolve
     * @example
     * // Get one LeetcodeSolve
     * const leetcodeSolve = await prisma.leetcodeSolve.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeetcodeSolveFindUniqueArgs>(args: Prisma.SelectSubset<T, LeetcodeSolveFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeetcodeSolveClient<runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LeetcodeSolve that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeetcodeSolveFindUniqueOrThrowArgs} args - Arguments to find a LeetcodeSolve
     * @example
     * // Get one LeetcodeSolve
     * const leetcodeSolve = await prisma.leetcodeSolve.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeetcodeSolveFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeetcodeSolveFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeetcodeSolveClient<runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LeetcodeSolve that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeetcodeSolveFindFirstArgs} args - Arguments to find a LeetcodeSolve
     * @example
     * // Get one LeetcodeSolve
     * const leetcodeSolve = await prisma.leetcodeSolve.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeetcodeSolveFindFirstArgs>(args?: Prisma.SelectSubset<T, LeetcodeSolveFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeetcodeSolveClient<runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LeetcodeSolve that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeetcodeSolveFindFirstOrThrowArgs} args - Arguments to find a LeetcodeSolve
     * @example
     * // Get one LeetcodeSolve
     * const leetcodeSolve = await prisma.leetcodeSolve.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeetcodeSolveFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeetcodeSolveFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeetcodeSolveClient<runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LeetcodeSolves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeetcodeSolveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeetcodeSolves
     * const leetcodeSolves = await prisma.leetcodeSolve.findMany()
     *
     * // Get first 10 LeetcodeSolves
     * const leetcodeSolves = await prisma.leetcodeSolve.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const leetcodeSolveWithIdOnly = await prisma.leetcodeSolve.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LeetcodeSolveFindManyArgs>(args?: Prisma.SelectSubset<T, LeetcodeSolveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LeetcodeSolve.
     * @param {LeetcodeSolveCreateArgs} args - Arguments to create a LeetcodeSolve.
     * @example
     * // Create one LeetcodeSolve
     * const LeetcodeSolve = await prisma.leetcodeSolve.create({
     *   data: {
     *     // ... data to create a LeetcodeSolve
     *   }
     * })
     *
     */
    create<T extends LeetcodeSolveCreateArgs>(args: Prisma.SelectSubset<T, LeetcodeSolveCreateArgs<ExtArgs>>): Prisma.Prisma__LeetcodeSolveClient<runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LeetcodeSolves.
     * @param {LeetcodeSolveCreateManyArgs} args - Arguments to create many LeetcodeSolves.
     * @example
     * // Create many LeetcodeSolves
     * const leetcodeSolve = await prisma.leetcodeSolve.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LeetcodeSolveCreateManyArgs>(args?: Prisma.SelectSubset<T, LeetcodeSolveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LeetcodeSolves and returns the data saved in the database.
     * @param {LeetcodeSolveCreateManyAndReturnArgs} args - Arguments to create many LeetcodeSolves.
     * @example
     * // Create many LeetcodeSolves
     * const leetcodeSolve = await prisma.leetcodeSolve.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LeetcodeSolves and only return the `id`
     * const leetcodeSolveWithIdOnly = await prisma.leetcodeSolve.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LeetcodeSolveCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeetcodeSolveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LeetcodeSolve.
     * @param {LeetcodeSolveDeleteArgs} args - Arguments to delete one LeetcodeSolve.
     * @example
     * // Delete one LeetcodeSolve
     * const LeetcodeSolve = await prisma.leetcodeSolve.delete({
     *   where: {
     *     // ... filter to delete one LeetcodeSolve
     *   }
     * })
     *
     */
    delete<T extends LeetcodeSolveDeleteArgs>(args: Prisma.SelectSubset<T, LeetcodeSolveDeleteArgs<ExtArgs>>): Prisma.Prisma__LeetcodeSolveClient<runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LeetcodeSolve.
     * @param {LeetcodeSolveUpdateArgs} args - Arguments to update one LeetcodeSolve.
     * @example
     * // Update one LeetcodeSolve
     * const leetcodeSolve = await prisma.leetcodeSolve.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LeetcodeSolveUpdateArgs>(args: Prisma.SelectSubset<T, LeetcodeSolveUpdateArgs<ExtArgs>>): Prisma.Prisma__LeetcodeSolveClient<runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LeetcodeSolves.
     * @param {LeetcodeSolveDeleteManyArgs} args - Arguments to filter LeetcodeSolves to delete.
     * @example
     * // Delete a few LeetcodeSolves
     * const { count } = await prisma.leetcodeSolve.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LeetcodeSolveDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeetcodeSolveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LeetcodeSolves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeetcodeSolveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeetcodeSolves
     * const leetcodeSolve = await prisma.leetcodeSolve.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LeetcodeSolveUpdateManyArgs>(args: Prisma.SelectSubset<T, LeetcodeSolveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LeetcodeSolves and returns the data updated in the database.
     * @param {LeetcodeSolveUpdateManyAndReturnArgs} args - Arguments to update many LeetcodeSolves.
     * @example
     * // Update many LeetcodeSolves
     * const leetcodeSolve = await prisma.leetcodeSolve.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LeetcodeSolves and only return the `id`
     * const leetcodeSolveWithIdOnly = await prisma.leetcodeSolve.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends LeetcodeSolveUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeetcodeSolveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LeetcodeSolve.
     * @param {LeetcodeSolveUpsertArgs} args - Arguments to update or create a LeetcodeSolve.
     * @example
     * // Update or create a LeetcodeSolve
     * const leetcodeSolve = await prisma.leetcodeSolve.upsert({
     *   create: {
     *     // ... data to create a LeetcodeSolve
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeetcodeSolve we want to update
     *   }
     * })
     */
    upsert<T extends LeetcodeSolveUpsertArgs>(args: Prisma.SelectSubset<T, LeetcodeSolveUpsertArgs<ExtArgs>>): Prisma.Prisma__LeetcodeSolveClient<runtime.Types.Result.GetResult<Prisma.$LeetcodeSolvePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LeetcodeSolves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeetcodeSolveCountArgs} args - Arguments to filter LeetcodeSolves to count.
     * @example
     * // Count the number of LeetcodeSolves
     * const count = await prisma.leetcodeSolve.count({
     *   where: {
     *     // ... the filter for the LeetcodeSolves we want to count
     *   }
     * })
    **/
    count<T extends LeetcodeSolveCountArgs>(args?: Prisma.Subset<T, LeetcodeSolveCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeetcodeSolveCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LeetcodeSolve.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeetcodeSolveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeetcodeSolveAggregateArgs>(args: Prisma.Subset<T, LeetcodeSolveAggregateArgs>): Prisma.PrismaPromise<GetLeetcodeSolveAggregateType<T>>;
    /**
     * Group by LeetcodeSolve.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeetcodeSolveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends LeetcodeSolveGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeetcodeSolveGroupByArgs['orderBy'];
    } : {
        orderBy?: LeetcodeSolveGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeetcodeSolveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeetcodeSolveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LeetcodeSolve model
     */
    readonly fields: LeetcodeSolveFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LeetcodeSolve.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LeetcodeSolveClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the LeetcodeSolve model
 */
export interface LeetcodeSolveFieldRefs {
    readonly id: Prisma.FieldRef<"LeetcodeSolve", 'Int'>;
    readonly problemNumber: Prisma.FieldRef<"LeetcodeSolve", 'Int'>;
    readonly problemName: Prisma.FieldRef<"LeetcodeSolve", 'String'>;
    readonly difficulty: Prisma.FieldRef<"LeetcodeSolve", 'String'>;
    readonly durationMin: Prisma.FieldRef<"LeetcodeSolve", 'Int'>;
    readonly solvedAt: Prisma.FieldRef<"LeetcodeSolve", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LeetcodeSolve", 'DateTime'>;
}
/**
 * LeetcodeSolve findUnique
 */
export type LeetcodeSolveFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
    /**
     * Filter, which LeetcodeSolve to fetch.
     */
    where: Prisma.LeetcodeSolveWhereUniqueInput;
};
/**
 * LeetcodeSolve findUniqueOrThrow
 */
export type LeetcodeSolveFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
    /**
     * Filter, which LeetcodeSolve to fetch.
     */
    where: Prisma.LeetcodeSolveWhereUniqueInput;
};
/**
 * LeetcodeSolve findFirst
 */
export type LeetcodeSolveFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
    /**
     * Filter, which LeetcodeSolve to fetch.
     */
    where?: Prisma.LeetcodeSolveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeetcodeSolves to fetch.
     */
    orderBy?: Prisma.LeetcodeSolveOrderByWithRelationInput | Prisma.LeetcodeSolveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeetcodeSolves.
     */
    cursor?: Prisma.LeetcodeSolveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeetcodeSolves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeetcodeSolves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeetcodeSolves.
     */
    distinct?: Prisma.LeetcodeSolveScalarFieldEnum | Prisma.LeetcodeSolveScalarFieldEnum[];
};
/**
 * LeetcodeSolve findFirstOrThrow
 */
export type LeetcodeSolveFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
    /**
     * Filter, which LeetcodeSolve to fetch.
     */
    where?: Prisma.LeetcodeSolveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeetcodeSolves to fetch.
     */
    orderBy?: Prisma.LeetcodeSolveOrderByWithRelationInput | Prisma.LeetcodeSolveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeetcodeSolves.
     */
    cursor?: Prisma.LeetcodeSolveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeetcodeSolves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeetcodeSolves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeetcodeSolves.
     */
    distinct?: Prisma.LeetcodeSolveScalarFieldEnum | Prisma.LeetcodeSolveScalarFieldEnum[];
};
/**
 * LeetcodeSolve findMany
 */
export type LeetcodeSolveFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
    /**
     * Filter, which LeetcodeSolves to fetch.
     */
    where?: Prisma.LeetcodeSolveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeetcodeSolves to fetch.
     */
    orderBy?: Prisma.LeetcodeSolveOrderByWithRelationInput | Prisma.LeetcodeSolveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LeetcodeSolves.
     */
    cursor?: Prisma.LeetcodeSolveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeetcodeSolves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeetcodeSolves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeetcodeSolves.
     */
    distinct?: Prisma.LeetcodeSolveScalarFieldEnum | Prisma.LeetcodeSolveScalarFieldEnum[];
};
/**
 * LeetcodeSolve create
 */
export type LeetcodeSolveCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
    /**
     * The data needed to create a LeetcodeSolve.
     */
    data: Prisma.XOR<Prisma.LeetcodeSolveCreateInput, Prisma.LeetcodeSolveUncheckedCreateInput>;
};
/**
 * LeetcodeSolve createMany
 */
export type LeetcodeSolveCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeetcodeSolves.
     */
    data: Prisma.LeetcodeSolveCreateManyInput | Prisma.LeetcodeSolveCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LeetcodeSolve createManyAndReturn
 */
export type LeetcodeSolveCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
    /**
     * The data used to create many LeetcodeSolves.
     */
    data: Prisma.LeetcodeSolveCreateManyInput | Prisma.LeetcodeSolveCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LeetcodeSolve update
 */
export type LeetcodeSolveUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
    /**
     * The data needed to update a LeetcodeSolve.
     */
    data: Prisma.XOR<Prisma.LeetcodeSolveUpdateInput, Prisma.LeetcodeSolveUncheckedUpdateInput>;
    /**
     * Choose, which LeetcodeSolve to update.
     */
    where: Prisma.LeetcodeSolveWhereUniqueInput;
};
/**
 * LeetcodeSolve updateMany
 */
export type LeetcodeSolveUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LeetcodeSolves.
     */
    data: Prisma.XOR<Prisma.LeetcodeSolveUpdateManyMutationInput, Prisma.LeetcodeSolveUncheckedUpdateManyInput>;
    /**
     * Filter which LeetcodeSolves to update
     */
    where?: Prisma.LeetcodeSolveWhereInput;
    /**
     * Limit how many LeetcodeSolves to update.
     */
    limit?: number;
};
/**
 * LeetcodeSolve updateManyAndReturn
 */
export type LeetcodeSolveUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
    /**
     * The data used to update LeetcodeSolves.
     */
    data: Prisma.XOR<Prisma.LeetcodeSolveUpdateManyMutationInput, Prisma.LeetcodeSolveUncheckedUpdateManyInput>;
    /**
     * Filter which LeetcodeSolves to update
     */
    where?: Prisma.LeetcodeSolveWhereInput;
    /**
     * Limit how many LeetcodeSolves to update.
     */
    limit?: number;
};
/**
 * LeetcodeSolve upsert
 */
export type LeetcodeSolveUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
    /**
     * The filter to search for the LeetcodeSolve to update in case it exists.
     */
    where: Prisma.LeetcodeSolveWhereUniqueInput;
    /**
     * In case the LeetcodeSolve found by the `where` argument doesn't exist, create a new LeetcodeSolve with this data.
     */
    create: Prisma.XOR<Prisma.LeetcodeSolveCreateInput, Prisma.LeetcodeSolveUncheckedCreateInput>;
    /**
     * In case the LeetcodeSolve was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LeetcodeSolveUpdateInput, Prisma.LeetcodeSolveUncheckedUpdateInput>;
};
/**
 * LeetcodeSolve delete
 */
export type LeetcodeSolveDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
    /**
     * Filter which LeetcodeSolve to delete.
     */
    where: Prisma.LeetcodeSolveWhereUniqueInput;
};
/**
 * LeetcodeSolve deleteMany
 */
export type LeetcodeSolveDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LeetcodeSolves to delete
     */
    where?: Prisma.LeetcodeSolveWhereInput;
    /**
     * Limit how many LeetcodeSolves to delete.
     */
    limit?: number;
};
/**
 * LeetcodeSolve without action
 */
export type LeetcodeSolveDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeetcodeSolve
     */
    select?: Prisma.LeetcodeSolveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeetcodeSolve
     */
    omit?: Prisma.LeetcodeSolveOmit<ExtArgs> | null;
};
export {};
