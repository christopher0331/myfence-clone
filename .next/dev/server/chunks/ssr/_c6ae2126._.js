module.exports = [
"[project]/node_modules/@supabase/node-fetch/lib/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/node_modules/@supabase/node-fetch/lib/index.js [app-ssr] (ecmascript)");
    });
});
}),
"[project]/src/lib/trustindex.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/src_lib_trustindex_ts_24ab63c5._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/trustindex.ts [app-ssr] (ecmascript)");
    });
});
}),
];