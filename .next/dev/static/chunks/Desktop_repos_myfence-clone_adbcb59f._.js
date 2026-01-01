(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/myfence-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/myfence-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/myfence-clone/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/repos/myfence-clone/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Desktop/repos/myfence-clone/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/myfence-clone/src/integrations/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const GoogleBusinessMap = ({ placeId, city, state, radiusMiles, className = "", showBusinessInfo = true, zoom: customZoom })=>{
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [businessData, setBusinessData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cityLocation, setCityLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleBusinessMap.useEffect": ()=>{
            const fetchBusinessData = {
                "GoogleBusinessMap.useEffect.fetchBusinessData": async ()=>{
                    if (!placeId) {
                        // If no placeId, we'll just use city geocoding
                        setBusinessData(null);
                        setLoading(false);
                        return;
                    }
                    try {
                        setLoading(true);
                        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].functions.invoke('fetch-google-business', {
                            body: {
                                placeId
                            }
                        });
                        if (error) throw error;
                        setBusinessData(data);
                    } catch (err) {
                        console.error('Error fetching business data:', err);
                        setError('Failed to load business information');
                    } finally{
                        setLoading(false);
                    }
                }
            }["GoogleBusinessMap.useEffect.fetchBusinessData"];
            fetchBusinessData();
        }
    }["GoogleBusinessMap.useEffect"], [
        placeId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleBusinessMap.useEffect": ()=>{
            if (!mapRef.current) return;
            if (!businessData?.location && !cityLocation && !city) return;
            if (loading) return; // Don't init map while still loading
            const initMap = {
                "GoogleBusinessMap.useEffect.initMap": async ()=>{
                    // Determine center coordinates
                    let center;
                    if (city && state && !cityLocation) {
                        // Geocode the city to get coordinates
                        const geocoder = new window.google.maps.Geocoder();
                        try {
                            const result = await geocoder.geocode({
                                address: `${city}, ${state}`
                            });
                            if (result.results && result.results[0]) {
                                const location = result.results[0].geometry.location;
                                center = {
                                    lat: location.lat(),
                                    lng: location.lng()
                                };
                                setCityLocation(center);
                            } else {
                                throw new Error('City not found');
                            }
                        } catch (err) {
                            console.error('Geocoding error:', err);
                            setError('Failed to locate city');
                            return;
                        }
                    } else if (cityLocation) {
                        center = cityLocation;
                    } else if (businessData?.location) {
                        const { latitude, longitude } = businessData.location;
                        center = {
                            lat: latitude,
                            lng: longitude
                        };
                    } else {
                        return;
                    }
                    // Initialize map with appropriate zoom based on radius and device
                    const getZoomLevel = {
                        "GoogleBusinessMap.useEffect.initMap.getZoomLevel": (miles)=>{
                            const isMobile = window.innerWidth < 768;
                            if (miles >= 50) return isMobile ? 7 : 8;
                            if (miles >= 20) return isMobile ? 8 : 9;
                            return isMobile ? 9 : 11;
                        }
                    }["GoogleBusinessMap.useEffect.initMap.getZoomLevel"];
                    const map = new window.google.maps.Map(mapRef.current, {
                        center,
                        zoom: customZoom || getZoomLevel(radiusMiles),
                        styles: [
                            {
                                featureType: "poi",
                                elementType: "labels",
                                stylers: [
                                    {
                                        visibility: "off"
                                    }
                                ]
                            }
                        ]
                    });
                    // Add marker for location
                    new window.google.maps.Marker({
                        position: center,
                        map,
                        title: city ? `${city}, ${state}` : businessData?.displayName?.text || "MyFence.com",
                        icon: {
                            path: window.google.maps.SymbolPath.CIRCLE,
                            scale: 10,
                            fillColor: "#FF6B35",
                            fillOpacity: 1,
                            strokeColor: "#fff",
                            strokeWeight: 2
                        }
                    });
                    // Add service area circle
                    new window.google.maps.Circle({
                        strokeColor: "#FF6B35",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#FF6B35",
                        fillOpacity: 0.15,
                        map,
                        center,
                        radius: radiusMiles * 1609.34
                    });
                }
            }["GoogleBusinessMap.useEffect.initMap"];
            // Load Google Maps script if not already loaded
            const loadGoogleMaps = {
                "GoogleBusinessMap.useEffect.loadGoogleMaps": async ()=>{
                    if (!(window.google && window.google.maps)) {
                        try {
                            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].functions.invoke('get-maps-key');
                            const apiKey = data?.key;
                            if (!apiKey) {
                                throw new Error('Failed to get Maps API key');
                            }
                            const script = document.createElement('script');
                            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
                            script.async = true;
                            script.defer = true;
                            script.onload = ({
                                "GoogleBusinessMap.useEffect.loadGoogleMaps": ()=>initMap()
                            })["GoogleBusinessMap.useEffect.loadGoogleMaps"];
                            script.onerror = ({
                                "GoogleBusinessMap.useEffect.loadGoogleMaps": ()=>{
                                    console.error('Google Maps JS failed to load');
                                    setError('Failed to load map');
                                }
                            })["GoogleBusinessMap.useEffect.loadGoogleMaps"];
                            document.head.appendChild(script);
                        } catch (err) {
                            console.error('Error loading Google Maps:', err);
                            setError('Failed to load map');
                        }
                    } else {
                        initMap();
                    }
                }
            }["GoogleBusinessMap.useEffect.loadGoogleMaps"];
            loadGoogleMaps();
        }
    }["GoogleBusinessMap.useEffect"], [
        businessData,
        cityLocation,
        city,
        state,
        radiusMiles,
        loading
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-8 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-8 w-8 animate-spin text-primary"
                }, void 0, false, {
                    fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
            lineNumber: 187,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error || placeId && !businessData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-8 text-center text-muted-foreground",
                children: error || "Unable to load map"
            }, void 0, false, {
                fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
            lineNumber: 197,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-0 relative",
                children: [
                    showBusinessInfo && businessData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg max-w-[280px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-sm leading-tight truncate flex-1",
                                            children: businessData.displayName?.text || "MyFence.com"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        businessData.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://www.google.com/maps/dir/?api=1&destination=${businessData.location.latitude},${businessData.location.longitude}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-xs text-blue-600 hover:underline whitespace-nowrap flex-shrink-0",
                                            children: "Directions"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                                            lineNumber: 218,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                businessData.formattedAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-600 mb-2 line-clamp-2",
                                    children: businessData.formattedAddress
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                                    lineNumber: 229,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                businessData.rating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm",
                                            children: businessData.rating.toFixed(1)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                                            lineNumber: 235,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex",
                                            children: [
                                                ...Array(5)
                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "h-3 w-3 fill-orange-500 text-orange-500"
                                                }, i, false, {
                                                    fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                                            lineNumber: 236,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        businessData.userRatingCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: businessData.websiteUri || "#",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-xs text-blue-600 hover:underline",
                                            children: [
                                                businessData.userRatingCount,
                                                " reviews"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                                            lineNumber: 245,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                                    lineNumber: 234,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                businessData.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://www.google.com/maps/search/?api=1&query=${businessData.location.latitude},${businessData.location.longitude}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-xs text-blue-600 hover:underline",
                                    children: "View larger map"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                                    lineNumber: 257,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                            lineNumber: 212,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                        lineNumber: 211,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: mapRef,
                        className: "w-full h-[300px] md:h-[500px] rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-muted/30 text-center text-sm text-muted-foreground",
                        children: city ? `Serving a ${radiusMiles}-mile radius in ${city}, ${state}` : `Serving a ${radiusMiles}-mile radius from our location`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
            lineNumber: 207,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GoogleBusinessMap, "m0AI/az3JfCMC10oBTF8TBFmoS0=");
_c = GoogleBusinessMap;
const __TURBOPACK__default__export__ = GoogleBusinessMap;
var _c;
__turbopack_context__.k.register(_c, "GoogleBusinessMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/repos/myfence-clone/src/components/GoogleBusinessMap.tsx [app-client] (ecmascript)"));
}),
"[project]/Desktop/repos/myfence-clone/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/myfence-clone/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Star", [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
]);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/Desktop/repos/myfence-clone/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$myfence$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/myfence-clone/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_repos_myfence-clone_adbcb59f._.js.map