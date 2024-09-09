"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[817],{"./node_modules/@sentry/core/build/esm/exports.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cp:()=>captureException});const SDK_VERSION="8.24.0",worldwide_GLOBAL_OBJ=globalThis;function worldwide_getGlobalSingleton(name,creator,obj){const gbl=obj||worldwide_GLOBAL_OBJ,__SENTRY__=gbl.__SENTRY__=gbl.__SENTRY__||{},versionedCarrier=__SENTRY__[SDK_VERSION]=__SENTRY__[SDK_VERSION]||{};return versionedCarrier[name]||(versionedCarrier[name]=creator())}function carrier_getMainCarrier(){return carrier_getSentryCarrier(worldwide_GLOBAL_OBJ),worldwide_GLOBAL_OBJ}function carrier_getSentryCarrier(carrier){const __SENTRY__=carrier.__SENTRY__=carrier.__SENTRY__||{};return __SENTRY__.version=__SENTRY__.version||SDK_VERSION,__SENTRY__[SDK_VERSION]=__SENTRY__[SDK_VERSION]||{}}const objectToString=Object.prototype.toString;function isBuiltin(wat,className){return objectToString.call(wat)===`[object ${className}]`}function is_isPlainObject(wat){return isBuiltin(wat,"Object")}function misc_uuid4(){const gbl=worldwide_GLOBAL_OBJ,crypto=gbl.crypto||gbl.msCrypto;let getRandomByte=()=>16*Math.random();try{if(crypto&&crypto.randomUUID)return crypto.randomUUID().replace(/-/g,"");crypto&&crypto.getRandomValues&&(getRandomByte=()=>{const typedArray=new Uint8Array(1);return crypto.getRandomValues(typedArray),typedArray[0]})}catch(_){}return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,(c=>(c^(15&getRandomByte())>>c/4).toString(16)))}function generatePropagationContext(){return{traceId:misc_uuid4(),spanId:misc_uuid4().substring(16)}}const ONE_SECOND_IN_MS=1e3;function time_dateTimestampInSeconds(){return Date.now()/ONE_SECOND_IN_MS}const time_timestampInSeconds=function createUnixTimestampInSecondsFunc(){const{performance}=worldwide_GLOBAL_OBJ;if(!performance||!performance.now)return time_dateTimestampInSeconds;const approxStartingTimeOrigin=Date.now()-performance.now(),timeOrigin=null==performance.timeOrigin?approxStartingTimeOrigin:performance.timeOrigin;return()=>(timeOrigin+performance.now())/ONE_SECOND_IN_MS}();let _browserPerformanceTimeOriginMode;(()=>{const{performance}=worldwide_GLOBAL_OBJ;if(!performance||!performance.now)return void(_browserPerformanceTimeOriginMode="none");const performanceNow=performance.now(),dateNow=Date.now(),timeOriginDelta=performance.timeOrigin?Math.abs(performance.timeOrigin+performanceNow-dateNow):36e5,timeOriginIsReliable=timeOriginDelta<36e5,navigationStart=performance.timing&&performance.timing.navigationStart,navigationStartDelta="number"==typeof navigationStart?Math.abs(navigationStart+performanceNow-dateNow):36e5;timeOriginIsReliable||navigationStartDelta<36e5?timeOriginDelta<=navigationStartDelta?(_browserPerformanceTimeOriginMode="timeOrigin",performance.timeOrigin):_browserPerformanceTimeOriginMode="navigationStart":_browserPerformanceTimeOriginMode="dateNow"})();const debug_build_DEBUG_BUILD="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__,CONSOLE_LEVELS=["debug","info","warn","error","log","assert","trace"],originalConsoleMethods={};const logger_logger=function makeLogger(){let enabled=!1;const logger={enable:()=>{enabled=!0},disable:()=>{enabled=!1},isEnabled:()=>enabled};return debug_build_DEBUG_BUILD?CONSOLE_LEVELS.forEach((name=>{logger[name]=(...args)=>{enabled&&function consoleSandbox(callback){if(!("console"in worldwide_GLOBAL_OBJ))return callback();const console=worldwide_GLOBAL_OBJ.console,wrappedFuncs={},wrappedLevels=Object.keys(originalConsoleMethods);wrappedLevels.forEach((level=>{const originalConsoleMethod=originalConsoleMethods[level];wrappedFuncs[level]=console[level],console[level]=originalConsoleMethod}));try{return callback()}finally{wrappedLevels.forEach((level=>{console[level]=wrappedFuncs[level]}))}}((()=>{worldwide_GLOBAL_OBJ.console[name](`Sentry Logger [${name}]:`,...args)}))}})):CONSOLE_LEVELS.forEach((name=>{logger[name]=()=>{}})),logger}();function session_updateSession(session,context={}){if(context.user&&(!session.ipAddress&&context.user.ip_address&&(session.ipAddress=context.user.ip_address),session.did||context.did||(session.did=context.user.id||context.user.email||context.user.username)),session.timestamp=context.timestamp||time_timestampInSeconds(),context.abnormal_mechanism&&(session.abnormal_mechanism=context.abnormal_mechanism),context.ignoreDuration&&(session.ignoreDuration=context.ignoreDuration),context.sid&&(session.sid=32===context.sid.length?context.sid:misc_uuid4()),void 0!==context.init&&(session.init=context.init),!session.did&&context.did&&(session.did=`${context.did}`),"number"==typeof context.started&&(session.started=context.started),session.ignoreDuration)session.duration=void 0;else if("number"==typeof context.duration)session.duration=context.duration;else{const duration=session.timestamp-session.started;session.duration=duration>=0?duration:0}context.release&&(session.release=context.release),context.environment&&(session.environment=context.environment),!session.ipAddress&&context.ipAddress&&(session.ipAddress=context.ipAddress),!session.userAgent&&context.userAgent&&(session.userAgent=context.userAgent),"number"==typeof context.errors&&(session.errors=context.errors),context.status&&(session.status=context.status)}function object_addNonEnumerableProperty(obj,name,value){try{Object.defineProperty(obj,name,{value,writable:!0,configurable:!0})}catch(o_O){debug_build_DEBUG_BUILD&&logger_logger.log(`Failed to add non-enumerable property "${name}" to object`,obj)}}function _setSpanForScope(scope,span){span?object_addNonEnumerableProperty(scope,"_sentrySpan",span):delete scope._sentrySpan}function _getSpanForScope(scope){return scope._sentrySpan}class ScopeClass{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=generatePropagationContext()}clone(){const newScope=new ScopeClass;return newScope._breadcrumbs=[...this._breadcrumbs],newScope._tags={...this._tags},newScope._extra={...this._extra},newScope._contexts={...this._contexts},newScope._user=this._user,newScope._level=this._level,newScope._session=this._session,newScope._transactionName=this._transactionName,newScope._fingerprint=this._fingerprint,newScope._eventProcessors=[...this._eventProcessors],newScope._requestSession=this._requestSession,newScope._attachments=[...this._attachments],newScope._sdkProcessingMetadata={...this._sdkProcessingMetadata},newScope._propagationContext={...this._propagationContext},newScope._client=this._client,newScope._lastEventId=this._lastEventId,_setSpanForScope(newScope,_getSpanForScope(this)),newScope}setClient(client){this._client=client}setLastEventId(lastEventId){this._lastEventId=lastEventId}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(callback){this._scopeListeners.push(callback)}addEventProcessor(callback){return this._eventProcessors.push(callback),this}setUser(user){return this._user=user||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&session_updateSession(this._session,{user}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(requestSession){return this._requestSession=requestSession,this}setTags(tags){return this._tags={...this._tags,...tags},this._notifyScopeListeners(),this}setTag(key,value){return this._tags={...this._tags,[key]:value},this._notifyScopeListeners(),this}setExtras(extras){return this._extra={...this._extra,...extras},this._notifyScopeListeners(),this}setExtra(key,extra){return this._extra={...this._extra,[key]:extra},this._notifyScopeListeners(),this}setFingerprint(fingerprint){return this._fingerprint=fingerprint,this._notifyScopeListeners(),this}setLevel(level){return this._level=level,this._notifyScopeListeners(),this}setTransactionName(name){return this._transactionName=name,this._notifyScopeListeners(),this}setContext(key,context){return null===context?delete this._contexts[key]:this._contexts[key]=context,this._notifyScopeListeners(),this}setSession(session){return session?this._session=session:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(captureContext){if(!captureContext)return this;const scopeToMerge="function"==typeof captureContext?captureContext(this):captureContext,[scopeInstance,requestSession]=scopeToMerge instanceof scope_Scope?[scopeToMerge.getScopeData(),scopeToMerge.getRequestSession()]:is_isPlainObject(scopeToMerge)?[captureContext,captureContext.requestSession]:[],{tags,extra,user,contexts,level,fingerprint=[],propagationContext}=scopeInstance||{};return this._tags={...this._tags,...tags},this._extra={...this._extra,...extra},this._contexts={...this._contexts,...contexts},user&&Object.keys(user).length&&(this._user=user),level&&(this._level=level),fingerprint.length&&(this._fingerprint=fingerprint),propagationContext&&(this._propagationContext=propagationContext),requestSession&&(this._requestSession=requestSession),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._session=void 0,_setSpanForScope(this,void 0),this._attachments=[],this._propagationContext=generatePropagationContext(),this._notifyScopeListeners(),this}addBreadcrumb(breadcrumb,maxBreadcrumbs){const maxCrumbs="number"==typeof maxBreadcrumbs?maxBreadcrumbs:100;if(maxCrumbs<=0)return this;const mergedBreadcrumb={timestamp:time_dateTimestampInSeconds(),...breadcrumb},breadcrumbs=this._breadcrumbs;return breadcrumbs.push(mergedBreadcrumb),this._breadcrumbs=breadcrumbs.length>maxCrumbs?breadcrumbs.slice(-maxCrumbs):breadcrumbs,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(attachment){return this._attachments.push(attachment),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:_getSpanForScope(this)}}setSDKProcessingMetadata(newData){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...newData},this}setPropagationContext(context){return this._propagationContext=context,this}getPropagationContext(){return this._propagationContext}captureException(exception,hint){const eventId=hint&&hint.event_id?hint.event_id:misc_uuid4();if(!this._client)return logger_logger.warn("No client configured on scope - will not capture exception!"),eventId;const syntheticException=new Error("Sentry syntheticException");return this._client.captureException(exception,{originalException:exception,syntheticException,...hint,event_id:eventId},this),eventId}captureMessage(message,level,hint){const eventId=hint&&hint.event_id?hint.event_id:misc_uuid4();if(!this._client)return logger_logger.warn("No client configured on scope - will not capture message!"),eventId;const syntheticException=new Error(message);return this._client.captureMessage(message,level,{originalException:message,syntheticException,...hint,event_id:eventId},this),eventId}captureEvent(event,hint){const eventId=hint&&hint.event_id?hint.event_id:misc_uuid4();return this._client?(this._client.captureEvent(event,{...hint,event_id:eventId},this),eventId):(logger_logger.warn("No client configured on scope - will not capture event!"),eventId)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((callback=>{callback(this)})),this._notifyingListeners=!1)}}const scope_Scope=ScopeClass;class AsyncContextStack{constructor(scope,isolationScope){let assignedScope,assignedIsolationScope;assignedScope=scope||new scope_Scope,assignedIsolationScope=isolationScope||new scope_Scope,this._stack=[{scope:assignedScope}],this._isolationScope=assignedIsolationScope}withScope(callback){const scope=this._pushScope();let maybePromiseResult;try{maybePromiseResult=callback(scope)}catch(e){throw this._popScope(),e}return function is_isThenable(wat){return Boolean(wat&&wat.then&&"function"==typeof wat.then)}(maybePromiseResult)?maybePromiseResult.then((res=>(this._popScope(),res)),(e=>{throw this._popScope(),e})):(this._popScope(),maybePromiseResult)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const scope=this.getScope().clone();return this._stack.push({client:this.getClient(),scope}),scope}_popScope(){return!(this._stack.length<=1)&&!!this._stack.pop()}}function getAsyncContextStack(){const sentry=carrier_getSentryCarrier(carrier_getMainCarrier());return sentry.stack=sentry.stack||new AsyncContextStack(function getDefaultCurrentScope(){return worldwide_getGlobalSingleton("defaultCurrentScope",(()=>new scope_Scope))}(),function getDefaultIsolationScope(){return worldwide_getGlobalSingleton("defaultIsolationScope",(()=>new scope_Scope))}())}function withScope(callback){return getAsyncContextStack().withScope(callback)}function withSetScope(scope,callback){const stack=getAsyncContextStack();return stack.withScope((()=>(stack.getStackTop().scope=scope,callback(scope))))}function stackStrategy_withIsolationScope(callback){return getAsyncContextStack().withScope((()=>callback(getAsyncContextStack().getIsolationScope())))}function asyncContext_getAsyncContextStrategy(carrier){const sentry=carrier_getSentryCarrier(carrier);return sentry.acs?sentry.acs:function getStackAsyncContextStrategy(){return{withIsolationScope:stackStrategy_withIsolationScope,withScope,withSetScope,withSetIsolationScope:(_isolationScope,callback)=>stackStrategy_withIsolationScope(callback),getCurrentScope:()=>getAsyncContextStack().getScope(),getIsolationScope:()=>getAsyncContextStack().getIsolationScope()}}()}function currentScopes_getCurrentScope(){return asyncContext_getAsyncContextStrategy(carrier_getMainCarrier()).getCurrentScope()}new WeakMap;function parseEventHintOrCaptureContext(hint){if(hint)return function hintIsScopeOrFunction(hint){return hint instanceof scope_Scope||"function"==typeof hint}(hint)||function hintIsScopeContext(hint){return Object.keys(hint).some((key=>captureContextKeys.includes(key)))}(hint)?{captureContext:hint}:hint}const captureContextKeys=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];function captureException(exception,hint){return currentScopes_getCurrentScope().captureException(exception,parseEventHintOrCaptureContext(hint))}},"./node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var utils=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/utils.js"),notifyManager=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/notifyManager.js"),focusManager=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/focusManager.js"),subscribable=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/subscribable.js"),modern_query=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/query.js"),QueryObserver=class extends subscribable.Q{constructor(client,options){super(),this.options=options,this.#client=client,this.#selectError=null,this.bindMethods(),this.setOptions(options)}#client;#currentQuery=void 0;#currentQueryInitialState=void 0;#currentResult=void 0;#currentResultState;#currentResultOptions;#selectError;#selectFn;#selectResult;#lastQueryWithDefinedData;#staleTimeoutId;#refetchIntervalId;#currentRefetchInterval;#trackedProps=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#currentQuery.addObserver(this),shouldFetchOnMount(this.#currentQuery,this.options)?this.#executeFetch():this.updateResult(),this.#updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return shouldFetchOn(this.#currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return shouldFetchOn(this.#currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#clearStaleTimeout(),this.#clearRefetchInterval(),this.#currentQuery.removeObserver(this)}setOptions(options,notifyOptions){const prevOptions=this.options,prevQuery=this.#currentQuery;if(this.options=this.#client.defaultQueryOptions(options),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,utils.Eh)(this.options.enabled,this.#currentQuery))throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#updateQuery(),this.#currentQuery.setOptions(this.options),prevOptions._defaulted&&!(0,utils.f8)(this.options,prevOptions)&&this.#client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#currentQuery,observer:this});const mounted=this.hasListeners();mounted&&shouldFetchOptionally(this.#currentQuery,prevQuery,this.options,prevOptions)&&this.#executeFetch(),this.updateResult(notifyOptions),!mounted||this.#currentQuery===prevQuery&&(0,utils.Eh)(this.options.enabled,this.#currentQuery)===(0,utils.Eh)(prevOptions.enabled,this.#currentQuery)&&(0,utils.d2)(this.options.staleTime,this.#currentQuery)===(0,utils.d2)(prevOptions.staleTime,this.#currentQuery)||this.#updateStaleTimeout();const nextRefetchInterval=this.#computeRefetchInterval();!mounted||this.#currentQuery===prevQuery&&(0,utils.Eh)(this.options.enabled,this.#currentQuery)===(0,utils.Eh)(prevOptions.enabled,this.#currentQuery)&&nextRefetchInterval===this.#currentRefetchInterval||this.#updateRefetchInterval(nextRefetchInterval)}getOptimisticResult(options){const query=this.#client.getQueryCache().build(this.#client,options),result=this.createResult(query,options);return function shouldAssignObserverCurrentProperties(observer,optimisticResult){if(!(0,utils.f8)(observer.getCurrentResult(),optimisticResult))return!0;return!1}(this,result)&&(this.#currentResult=result,this.#currentResultOptions=this.options,this.#currentResultState=this.#currentQuery.state),result}getCurrentResult(){return this.#currentResult}trackResult(result,onPropTracked){const trackedResult={};return Object.keys(result).forEach((key=>{Object.defineProperty(trackedResult,key,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(key),onPropTracked?.(key),result[key])})})),trackedResult}trackProp(key){this.#trackedProps.add(key)}getCurrentQuery(){return this.#currentQuery}refetch({...options}={}){return this.fetch({...options})}fetchOptimistic(options){const defaultedOptions=this.#client.defaultQueryOptions(options),query=this.#client.getQueryCache().build(this.#client,defaultedOptions);return query.isFetchingOptimistic=!0,query.fetch().then((()=>this.createResult(query,defaultedOptions)))}fetch(fetchOptions){return this.#executeFetch({...fetchOptions,cancelRefetch:fetchOptions.cancelRefetch??!0}).then((()=>(this.updateResult(),this.#currentResult)))}#executeFetch(fetchOptions){this.#updateQuery();let promise=this.#currentQuery.fetch(this.options,fetchOptions);return fetchOptions?.throwOnError||(promise=promise.catch(utils.lQ)),promise}#updateStaleTimeout(){this.#clearStaleTimeout();const staleTime=(0,utils.d2)(this.options.staleTime,this.#currentQuery);if(utils.S$||this.#currentResult.isStale||!(0,utils.gn)(staleTime))return;const timeout=(0,utils.j3)(this.#currentResult.dataUpdatedAt,staleTime)+1;this.#staleTimeoutId=setTimeout((()=>{this.#currentResult.isStale||this.updateResult()}),timeout)}#computeRefetchInterval(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#currentQuery):this.options.refetchInterval)??!1}#updateRefetchInterval(nextInterval){this.#clearRefetchInterval(),this.#currentRefetchInterval=nextInterval,!utils.S$&&!1!==(0,utils.Eh)(this.options.enabled,this.#currentQuery)&&(0,utils.gn)(this.#currentRefetchInterval)&&0!==this.#currentRefetchInterval&&(this.#refetchIntervalId=setInterval((()=>{(this.options.refetchIntervalInBackground||focusManager.m.isFocused())&&this.#executeFetch()}),this.#currentRefetchInterval))}#updateTimers(){this.#updateStaleTimeout(),this.#updateRefetchInterval(this.#computeRefetchInterval())}#clearStaleTimeout(){this.#staleTimeoutId&&(clearTimeout(this.#staleTimeoutId),this.#staleTimeoutId=void 0)}#clearRefetchInterval(){this.#refetchIntervalId&&(clearInterval(this.#refetchIntervalId),this.#refetchIntervalId=void 0)}createResult(query,options){const prevQuery=this.#currentQuery,prevOptions=this.options,prevResult=this.#currentResult,prevResultState=this.#currentResultState,prevResultOptions=this.#currentResultOptions,queryInitialState=query!==prevQuery?query.state:this.#currentQueryInitialState,{state}=query;let data,newState={...state},isPlaceholderData=!1;if(options._optimisticResults){const mounted=this.hasListeners(),fetchOnMount=!mounted&&shouldFetchOnMount(query,options),fetchOptionally=mounted&&shouldFetchOptionally(query,prevQuery,options,prevOptions);(fetchOnMount||fetchOptionally)&&(newState={...newState,...(0,modern_query.k)(state.data,query.options)}),"isRestoring"===options._optimisticResults&&(newState.fetchStatus="idle")}let{error,errorUpdatedAt,status}=newState;if(options.select&&void 0!==newState.data)if(prevResult&&newState.data===prevResultState?.data&&options.select===this.#selectFn)data=this.#selectResult;else try{this.#selectFn=options.select,data=options.select(newState.data),data=(0,utils.pl)(prevResult?.data,data,options),this.#selectResult=data,this.#selectError=null}catch(selectError){this.#selectError=selectError}else data=newState.data;if(void 0!==options.placeholderData&&void 0===data&&"pending"===status){let placeholderData;if(prevResult?.isPlaceholderData&&options.placeholderData===prevResultOptions?.placeholderData)placeholderData=prevResult.data;else if(placeholderData="function"==typeof options.placeholderData?options.placeholderData(this.#lastQueryWithDefinedData?.state.data,this.#lastQueryWithDefinedData):options.placeholderData,options.select&&void 0!==placeholderData)try{placeholderData=options.select(placeholderData),this.#selectError=null}catch(selectError){this.#selectError=selectError}void 0!==placeholderData&&(status="success",data=(0,utils.pl)(prevResult?.data,placeholderData,options),isPlaceholderData=!0)}this.#selectError&&(error=this.#selectError,data=this.#selectResult,errorUpdatedAt=Date.now(),status="error");const isFetching="fetching"===newState.fetchStatus,isPending="pending"===status,isError="error"===status,isLoading=isPending&&isFetching,hasData=void 0!==data;return{status,fetchStatus:newState.fetchStatus,isPending,isSuccess:"success"===status,isError,isInitialLoading:isLoading,isLoading,data,dataUpdatedAt:newState.dataUpdatedAt,error,errorUpdatedAt,failureCount:newState.fetchFailureCount,failureReason:newState.fetchFailureReason,errorUpdateCount:newState.errorUpdateCount,isFetched:newState.dataUpdateCount>0||newState.errorUpdateCount>0,isFetchedAfterMount:newState.dataUpdateCount>queryInitialState.dataUpdateCount||newState.errorUpdateCount>queryInitialState.errorUpdateCount,isFetching,isRefetching:isFetching&&!isPending,isLoadingError:isError&&!hasData,isPaused:"paused"===newState.fetchStatus,isPlaceholderData,isRefetchError:isError&&hasData,isStale:isStale(query,options),refetch:this.refetch}}updateResult(notifyOptions){const prevResult=this.#currentResult,nextResult=this.createResult(this.#currentQuery,this.options);if(this.#currentResultState=this.#currentQuery.state,this.#currentResultOptions=this.options,void 0!==this.#currentResultState.data&&(this.#lastQueryWithDefinedData=this.#currentQuery),(0,utils.f8)(nextResult,prevResult))return;this.#currentResult=nextResult;const defaultNotifyOptions={};!1!==notifyOptions?.listeners&&(()=>{if(!prevResult)return!0;const{notifyOnChangeProps}=this.options,notifyOnChangePropsValue="function"==typeof notifyOnChangeProps?notifyOnChangeProps():notifyOnChangeProps;if("all"===notifyOnChangePropsValue||!notifyOnChangePropsValue&&!this.#trackedProps.size)return!0;const includedProps=new Set(notifyOnChangePropsValue??this.#trackedProps);return this.options.throwOnError&&includedProps.add("error"),Object.keys(this.#currentResult).some((key=>{const typedKey=key;return this.#currentResult[typedKey]!==prevResult[typedKey]&&includedProps.has(typedKey)}))})()&&(defaultNotifyOptions.listeners=!0),this.#notify({...defaultNotifyOptions,...notifyOptions})}#updateQuery(){const query=this.#client.getQueryCache().build(this.#client,this.options);if(query===this.#currentQuery)return;const prevQuery=this.#currentQuery;this.#currentQuery=query,this.#currentQueryInitialState=query.state,this.hasListeners()&&(prevQuery?.removeObserver(this),query.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#updateTimers()}#notify(notifyOptions){notifyManager.j.batch((()=>{notifyOptions.listeners&&this.listeners.forEach((listener=>{listener(this.#currentResult)})),this.#client.getQueryCache().notify({query:this.#currentQuery,type:"observerResultsUpdated"})}))}};function shouldFetchOnMount(query,options){return function shouldLoadOnMount(query,options){return!1!==(0,utils.Eh)(options.enabled,query)&&void 0===query.state.data&&!("error"===query.state.status&&!1===options.retryOnMount)}(query,options)||void 0!==query.state.data&&shouldFetchOn(query,options,options.refetchOnMount)}function shouldFetchOn(query,options,field){if(!1!==(0,utils.Eh)(options.enabled,query)){const value="function"==typeof field?field(query):field;return"always"===value||!1!==value&&isStale(query,options)}return!1}function shouldFetchOptionally(query,prevQuery,options,prevOptions){return(query!==prevQuery||!1===(0,utils.Eh)(prevOptions.enabled,query))&&(!options.suspense||"error"!==query.state.status)&&isStale(query,options)}function isStale(query,options){return!1!==(0,utils.Eh)(options.enabled,query)&&query.isStaleByTime((0,utils.d2)(options.staleTime,query))}var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/react/jsx-runtime.js");function createValue(){let isReset=!1;return{clearReset:()=>{isReset=!1},reset:()=>{isReset=!0},isReset:()=>isReset}}var QueryErrorResetBoundaryContext=react.createContext(createValue()),useQueryErrorResetBoundary=()=>react.useContext(QueryErrorResetBoundaryContext),QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),IsRestoringContext=react.createContext(!1),useIsRestoring=()=>react.useContext(IsRestoringContext),modern_utils=(IsRestoringContext.Provider,__webpack_require__("./node_modules/@tanstack/react-query/build/modern/utils.js")),ensurePreventErrorBoundaryRetry=(options,errorResetBoundary)=>{(options.suspense||options.throwOnError)&&(errorResetBoundary.isReset()||(options.retryOnMount=!1))},useClearResetErrorBoundary=errorResetBoundary=>{react.useEffect((()=>{errorResetBoundary.clearReset()}),[errorResetBoundary])},getHasError=({result,errorResetBoundary,throwOnError,query})=>result.isError&&!errorResetBoundary.isReset()&&!result.isFetching&&query&&(0,modern_utils.G)(throwOnError,[result.error,query]),ensureSuspenseTimers=defaultedOptions=>{defaultedOptions.suspense&&("number"!=typeof defaultedOptions.staleTime&&(defaultedOptions.staleTime=1e3),"number"==typeof defaultedOptions.gcTime&&(defaultedOptions.gcTime=Math.max(defaultedOptions.gcTime,1e3)))},shouldSuspend=(defaultedOptions,result)=>defaultedOptions?.suspense&&result.isPending,fetchOptimistic=(defaultedOptions,observer,errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch((()=>{errorResetBoundary.clearReset()}));function useQuery(options,queryClient){return function useBaseQuery(options,Observer,queryClient){const client=(0,QueryClientProvider.jE)(queryClient),isRestoring=useIsRestoring(),errorResetBoundary=useQueryErrorResetBoundary(),defaultedOptions=client.defaultQueryOptions(options);client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions),defaultedOptions._optimisticResults=isRestoring?"isRestoring":"optimistic",ensureSuspenseTimers(defaultedOptions),ensurePreventErrorBoundaryRetry(defaultedOptions,errorResetBoundary),useClearResetErrorBoundary(errorResetBoundary);const[observer]=react.useState((()=>new Observer(client,defaultedOptions))),result=observer.getOptimisticResult(defaultedOptions);if(react.useSyncExternalStore(react.useCallback((onStoreChange=>{const unsubscribe=isRestoring?()=>{}:observer.subscribe(notifyManager.j.batchCalls(onStoreChange));return observer.updateResult(),unsubscribe}),[observer,isRestoring]),(()=>observer.getCurrentResult()),(()=>observer.getCurrentResult())),react.useEffect((()=>{observer.setOptions(defaultedOptions,{listeners:!1})}),[defaultedOptions,observer]),shouldSuspend(defaultedOptions,result))throw fetchOptimistic(defaultedOptions,observer,errorResetBoundary);if(getHasError({result,errorResetBoundary,throwOnError:defaultedOptions.throwOnError,query:client.getQueryCache().get(defaultedOptions.queryHash)}))throw result.error;return client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions,result),defaultedOptions.notifyOnChangeProps?result:observer.trackResult(result)}(options,QueryObserver,queryClient)}},"./node_modules/@tanstack/react-query/build/modern/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function shouldThrowError(throwError,params){return"function"==typeof throwError?throwError(...params):!!throwError}function noop(){}__webpack_require__.d(__webpack_exports__,{G:()=>shouldThrowError,l:()=>noop})}}]);