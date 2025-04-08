import require$$0, { createContext, useContext, useState, useEffect, useCallback, memo, useMemo, forwardRef, useImperativeHandle } from 'react';
import { EditorContent as EditorContent$1, ReactRenderer, useEditor } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import Underline$1 from '@tiptap/extension-underline';
import Strike$1 from '@tiptap/extension-strike';
import Link$1 from '@tiptap/extension-link';
import Bold$1 from '@tiptap/extension-bold';
import Italic$1 from '@tiptap/extension-italic';
import BulletList$1 from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import OrderedList$1 from '@tiptap/extension-ordered-list';
import Blockquote$1 from '@tiptap/extension-blockquote';
import CodeBlock$1 from '@tiptap/extension-code-block';
import Heading$1 from '@tiptap/extension-heading';
import TextAlign$1 from '@tiptap/extension-text-align';
import Image$1 from '@tiptap/extension-image';
import Mention$1 from '@tiptap/extension-mention';
import tippy from 'tippy.js';
import { Fancybox } from '@fancyapps/ui';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=require$$0,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = require$$0;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self) ;
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum();

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

const EditorContext = createContext(null);
const EditorProvider = ({ children, store, }) => {
    return (jsxRuntimeExports.jsx(EditorContext.Provider, { value: store, children: children }));
};

const useEditorData = () => {
    const store = useContext(EditorContext);
    if (!store) {
        throw new Error('Editor not initialized');
    }
    return store;
};

const Blockquote = () => {
    const { editor } = useEditorData();
    return (jsxRuntimeExports.jsx("a", { title: "Blockquote", className: editor.isActive('blockquote') ? 'active' : '', onClick: () => editor.chain().focus().toggleBlockquote().run(), children: jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("path", { d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }), jsxRuntimeExports.jsx("path", { d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" })] }) }));
};

const Bold = () => {
    const { editor } = useEditorData();
    return (jsxRuntimeExports.jsx("a", { title: "Bold", className: editor.isActive('bold') ? 'active' : '', onClick: () => editor.chain().focus().toggleBold().run(), children: jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: jsxRuntimeExports.jsx("path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }) }) }));
};

const BulletList = () => {
    const { editor } = useEditorData();
    return (jsxRuntimeExports.jsx("a", { title: "Bulleted List", className: editor.isActive('bulletList') ? 'active' : '', onClick: () => editor.chain().focus().toggleBulletList().run(), children: jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("path", { d: "M3 12h.01" }), jsxRuntimeExports.jsx("path", { d: "M3 18h.01" }), jsxRuntimeExports.jsx("path", { d: "M3 6h.01" }), jsxRuntimeExports.jsx("path", { d: "M8 12h13" }), jsxRuntimeExports.jsx("path", { d: "M8 18h13" }), jsxRuntimeExports.jsx("path", { d: "M8 6h13" })] }) }));
};

const CodeBlock = () => {
    const { editor } = useEditorData();
    return (jsxRuntimeExports.jsx("a", { title: "Code Block", className: editor.isActive('codeBlock') ? 'active' : '', onClick: () => editor.chain().focus().toggleCodeBlock().run(), children: jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("polyline", { points: "16 18 22 12 16 6" }), jsxRuntimeExports.jsx("polyline", { points: "8 6 2 12 8 18" })] }) }));
};

const Svg$1 = ({ level }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: level === 1 ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M4 12h8" }), jsxRuntimeExports.jsx("path", { d: "M4 18V6" }), jsxRuntimeExports.jsx("path", { d: "M12 18V6" }), jsxRuntimeExports.jsx("path", { d: "m17 12 3-2v8" })] })) : level === 2 ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M4 12h8" }), jsxRuntimeExports.jsx("path", { d: "M4 18V6" }), jsxRuntimeExports.jsx("path", { d: "M12 18V6" }), jsxRuntimeExports.jsx("path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" })] })) : level === 3 ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M4 12h8" }), jsxRuntimeExports.jsx("path", { d: "M4 18V6" }), jsxRuntimeExports.jsx("path", { d: "M12 18V6" }), jsxRuntimeExports.jsx("path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }), jsxRuntimeExports.jsx("path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" })] })) : level === 4 ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12 18V6" }), jsxRuntimeExports.jsx("path", { d: "M17 10v3a1 1 0 0 0 1 1h3" }), jsxRuntimeExports.jsx("path", { d: "M21 10v8" }), jsxRuntimeExports.jsx("path", { d: "M4 12h8" }), jsxRuntimeExports.jsx("path", { d: "M4 18V6" })] })) : level === 5 ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M4 12h8" }), jsxRuntimeExports.jsx("path", { d: "M4 18V6" }), jsxRuntimeExports.jsx("path", { d: "M12 18V6" }), jsxRuntimeExports.jsx("path", { d: "M17 13v-3h4" }), jsxRuntimeExports.jsx("path", { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" })] })) : (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M4 12h8" }), jsxRuntimeExports.jsx("path", { d: "M4 18V6" }), jsxRuntimeExports.jsx("path", { d: "M12 18V6" }), jsxRuntimeExports.jsx("circle", { cx: "19", cy: "16", r: "2" }), jsxRuntimeExports.jsx("path", { d: "M20 10c-2 2-3 3.5-3 6" })] })) }));
};
const Heading = ({ level }) => {
    const { editor } = useEditorData();
    return (jsxRuntimeExports.jsx("a", { title: `Heading ${level}`, className: editor.isActive({ level }) ? 'active' : '', onClick: () => editor.chain().focus().toggleHeading({ level }).run(), children: jsxRuntimeExports.jsx(Svg$1, { level: level }) }));
};

const Image = () => {
    const { editor, config } = useEditorData();
    const [inputFile, setInputFile] = useState(null);
    useEffect(() => {
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.accept = 'image/*';
        input.onchange = (e) => {
            const input = e.target;
            const files = input.files;
            if (!(files === null || files === void 0 ? void 0 : files.length))
                return;
            if (config.uploadImage) {
                config.uploadImage(files).then((urls) => {
                    urls.map((url) => {
                        editor.chain().focus().setImage({ src: url }).run();
                    });
                });
            }
            else {
                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const base64 = reader.result;
                        editor.chain().focus().setImage({ src: base64 }).run();
                    };
                    reader.readAsDataURL(files[i]);
                }
            }
            input.value = '';
        };
        setInputFile(input);
        return () => setInputFile(null);
    }, [editor, config]);
    const handleClick = () => {
        if (inputFile) {
            inputFile.click();
        }
    };
    return (jsxRuntimeExports.jsx("a", { onClick: handleClick, children: jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }), jsxRuntimeExports.jsx("circle", { cx: "9", cy: "9", r: "2" }), jsxRuntimeExports.jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })] }) }));
};

const Italic = () => {
    const { editor } = useEditorData();
    return (jsxRuntimeExports.jsx("a", { title: "Italic", className: editor.isActive('italic') ? 'active' : '', onClick: () => editor.chain().focus().toggleItalic().run(), children: jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("line", { x1: "19", x2: "10", y1: "4", y2: "4" }), jsxRuntimeExports.jsx("line", { x1: "14", x2: "5", y1: "20", y2: "20" }), jsxRuntimeExports.jsx("line", { x1: "15", x2: "9", y1: "4", y2: "20" })] }) }));
};

const Link = () => {
    const { editor, config } = useEditorData();
    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href;
        const run = (url) => {
            if (!url) {
                if (previousUrl) {
                    editor.chain().focus().extendMarkRange('link').unsetLink().run();
                }
                return;
            }
            try {
                editor
                    .chain()
                    .focus()
                    .extendMarkRange('link')
                    .setLink({ href: url })
                    .run();
            }
            catch (_a) {
                //
            }
        };
        if (config.popupLink) {
            config.popupLink(previousUrl, run);
        }
        else {
            const url = window.prompt('URL', previousUrl);
            if (url === null) {
                return;
            }
            run(url);
        }
    }, [editor, config]);
    return (jsxRuntimeExports.jsx("a", { title: "Link", className: editor.isActive('link') ? 'active' : '', onClick: setLink, children: jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), jsxRuntimeExports.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })] }) }));
};

const Mention = () => {
    const { editor } = useEditorData();
    return (jsxRuntimeExports.jsx("a", { onClick: () => editor.chain().focus().insertContent(' @').run(), children: jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "4" }), jsxRuntimeExports.jsx("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })] }) }));
};

const OrderedList = () => {
    const { editor } = useEditorData();
    return (jsxRuntimeExports.jsx("a", { title: "Ordered List", className: editor.isActive('orderedList') ? 'active' : '', onClick: () => editor.chain().focus().toggleOrderedList().run(), children: jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("path", { d: "M10 12h11" }), jsxRuntimeExports.jsx("path", { d: "M10 18h11" }), jsxRuntimeExports.jsx("path", { d: "M10 6h11" }), jsxRuntimeExports.jsx("path", { d: "M4 10h2" }), jsxRuntimeExports.jsx("path", { d: "M4 6h1v4" }), jsxRuntimeExports.jsx("path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" })] }) }));
};

const Separation = memo(() => {
    return jsxRuntimeExports.jsx("span", { className: "separation" });
});

const Strike = () => {
    const { editor } = useEditorData();
    return (jsxRuntimeExports.jsx("a", { title: "Strike", className: editor.isActive('strike') ? 'active' : '', onClick: () => editor.chain().focus().toggleStrike().run(), children: jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }), jsxRuntimeExports.jsx("path", { d: "M14 12a4 4 0 0 1 0 8H6" }), jsxRuntimeExports.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" })] }) }));
};

const Svg = ({ type }) => {
    return (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: type === 'left' ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M15 12H3" }), jsxRuntimeExports.jsx("path", { d: "M17 18H3" }), jsxRuntimeExports.jsx("path", { d: "M21 6H3" })] })) : type === 'center' ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17 12H7" }), jsxRuntimeExports.jsx("path", { d: "M19 18H5" }), jsxRuntimeExports.jsx("path", { d: "M21 6H3" })] })) : type === 'right' ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M21 12H9" }), jsxRuntimeExports.jsx("path", { d: "M21 18H7" }), jsxRuntimeExports.jsx("path", { d: "M21 6H3" })] })) : (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M3 12h18" }), jsxRuntimeExports.jsx("path", { d: "M3 18h18" }), jsxRuntimeExports.jsx("path", { d: "M3 6h18" })] })) }));
};
const TextAlign = () => {
    const { editor } = useEditorData();
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("a", { onClick: () => editor.chain().focus().setTextAlign('justify').run(), children: jsxRuntimeExports.jsx(Svg, { type: "justify" }) }), jsxRuntimeExports.jsx("a", { onClick: () => editor.chain().focus().setTextAlign('left').run(), children: jsxRuntimeExports.jsx(Svg, { type: "left" }) }), jsxRuntimeExports.jsx("a", { onClick: () => editor.chain().focus().setTextAlign('center').run(), children: jsxRuntimeExports.jsx(Svg, { type: "center" }) }), jsxRuntimeExports.jsx("a", { onClick: () => editor.chain().focus().setTextAlign('right').run(), children: jsxRuntimeExports.jsx(Svg, { type: "right" }) })] }));
};

const Underline = () => {
    const { editor } = useEditorData();
    return (jsxRuntimeExports.jsx("a", { title: "Underline", className: editor.isActive('underline') ? 'active' : '', onClick: () => editor.chain().focus().toggleUnderline().run(), children: jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }), jsxRuntimeExports.jsx("line", { x1: "4", x2: "20", y1: "20", y2: "20" })] }) }));
};

const EditorMenu = ({ items }) => {
    return (jsxRuntimeExports.jsx("div", { className: "editor-menu", children: items.map((name, i) => (jsxRuntimeExports.jsx(Item, { name: name }, i))) }));
};
const Item = ({ name }) => {
    if (name === 'bold') {
        return jsxRuntimeExports.jsx(Bold, {});
    }
    if (name === 'italic') {
        return jsxRuntimeExports.jsx(Italic, {});
    }
    if (name === 'underline') {
        return jsxRuntimeExports.jsx(Underline, {});
    }
    if (name === 'strike') {
        return jsxRuntimeExports.jsx(Strike, {});
    }
    if (name === 'h1') {
        return jsxRuntimeExports.jsx(Heading, { level: 1 });
    }
    if (name === 'h2') {
        return jsxRuntimeExports.jsx(Heading, { level: 2 });
    }
    if (name === 'h3') {
        return jsxRuntimeExports.jsx(Heading, { level: 3 });
    }
    if (name === 'h4') {
        return jsxRuntimeExports.jsx(Heading, { level: 4 });
    }
    if (name === 'h5') {
        return jsxRuntimeExports.jsx(Heading, { level: 5 });
    }
    if (name === 'h6') {
        return jsxRuntimeExports.jsx(Heading, { level: 6 });
    }
    if (name === 'link') {
        return jsxRuntimeExports.jsx(Link, {});
    }
    if (name === 'image') {
        return jsxRuntimeExports.jsx(Image, {});
    }
    if (name === 'mention') {
        return jsxRuntimeExports.jsx(Mention, {});
    }
    if (name === 'bullet-list') {
        return jsxRuntimeExports.jsx(BulletList, {});
    }
    if (name === 'ordered-list') {
        return jsxRuntimeExports.jsx(OrderedList, {});
    }
    if (name === 'blockquote') {
        return jsxRuntimeExports.jsx(Blockquote, {});
    }
    if (name === 'code-block') {
        return jsxRuntimeExports.jsx(CodeBlock, {});
    }
    if (name === 'text-align') {
        return jsxRuntimeExports.jsx(TextAlign, {});
    }
    return jsxRuntimeExports.jsx(Separation, {});
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ":root{--f-spinner-width: 36px;--f-spinner-height: 36px;--f-spinner-color-1: rgba(0, 0, 0, 0.1);--f-spinner-color-2: rgba(17, 24, 28, 0.8);--f-spinner-stroke: 2.75}.f-spinner{margin:auto;padding:0;width:var(--f-spinner-width);height:var(--f-spinner-height)}.f-spinner svg{width:100%;height:100%;vertical-align:top;animation:f-spinner-rotate 2s linear infinite}.f-spinner svg *{stroke-width:var(--f-spinner-stroke);fill:none}.f-spinner svg *:first-child{stroke:var(--f-spinner-color-1)}.f-spinner svg *:last-child{stroke:var(--f-spinner-color-2);animation:f-spinner-dash 2s ease-in-out infinite}@keyframes f-spinner-rotate{100%{transform:rotate(360deg)}}@keyframes f-spinner-dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}.f-throwOutUp{animation:var(--f-throw-out-duration, 0.175s) ease-out both f-throwOutUp}.f-throwOutDown{animation:var(--f-throw-out-duration, 0.175s) ease-out both f-throwOutDown}@keyframes f-throwOutUp{to{transform:translate3d(0, calc(var(--f-throw-out-distance, 150px) * -1), 0);opacity:0}}@keyframes f-throwOutDown{to{transform:translate3d(0, var(--f-throw-out-distance, 150px), 0);opacity:0}}.f-zoomInUp{animation:var(--f-transition-duration, 0.2s) ease .1s both f-zoomInUp}.f-zoomOutDown{animation:var(--f-transition-duration, 0.2s) ease both f-zoomOutDown}@keyframes f-zoomInUp{from{transform:scale(0.975) translate3d(0, 16px, 0);opacity:0}to{transform:scale(1) translate3d(0, 0, 0);opacity:1}}@keyframes f-zoomOutDown{to{transform:scale(0.975) translate3d(0, 16px, 0);opacity:0}}.f-fadeIn{animation:var(--f-transition-duration, 0.2s) var(--f-transition-easing, ease) var(--f-transition-delay, 0s) both f-fadeIn;z-index:2}.f-fadeOut{animation:var(--f-transition-duration, 0.2s) var(--f-transition-easing, ease) var(--f-transition-delay, 0s) both f-fadeOut;z-index:1}@keyframes f-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes f-fadeOut{100%{opacity:0}}.f-fadeFastIn{animation:var(--f-transition-duration, 0.2s) ease-out both f-fadeFastIn;z-index:2}.f-fadeFastOut{animation:var(--f-transition-duration, 0.1s) ease-out both f-fadeFastOut;z-index:2}@keyframes f-fadeFastIn{0%{opacity:.75}100%{opacity:1}}@keyframes f-fadeFastOut{100%{opacity:0}}.f-fadeSlowIn{animation:var(--f-transition-duration, 0.5s) ease both f-fadeSlowIn;z-index:2}.f-fadeSlowOut{animation:var(--f-transition-duration, 0.5s) ease both f-fadeSlowOut;z-index:1}@keyframes f-fadeSlowIn{0%{opacity:0}100%{opacity:1}}@keyframes f-fadeSlowOut{100%{opacity:0}}.f-crossfadeIn{animation:var(--f-transition-duration, 0.2s) ease-out both f-crossfadeIn;z-index:2}.f-crossfadeOut{animation:calc(var(--f-transition-duration, 0.2s)*.5) linear .1s both f-crossfadeOut;z-index:1}@keyframes f-crossfadeIn{0%{opacity:0}100%{opacity:1}}@keyframes f-crossfadeOut{100%{opacity:0}}.f-slideIn.from-next{animation:var(--f-transition-duration, 0.85s) cubic-bezier(0.16, 1, 0.3, 1) f-slideInNext}.f-slideIn.from-prev{animation:var(--f-transition-duration, 0.85s) cubic-bezier(0.16, 1, 0.3, 1) f-slideInPrev}.f-slideOut.to-next{animation:var(--f-transition-duration, 0.85s) cubic-bezier(0.16, 1, 0.3, 1) f-slideOutNext}.f-slideOut.to-prev{animation:var(--f-transition-duration, 0.85s) cubic-bezier(0.16, 1, 0.3, 1) f-slideOutPrev}@keyframes f-slideInPrev{0%{transform:translateX(100%)}100%{transform:translate3d(0, 0, 0)}}@keyframes f-slideInNext{0%{transform:translateX(-100%)}100%{transform:translate3d(0, 0, 0)}}@keyframes f-slideOutNext{100%{transform:translateX(-100%)}}@keyframes f-slideOutPrev{100%{transform:translateX(100%)}}.f-classicIn.from-next{animation:var(--f-transition-duration, 0.85s) cubic-bezier(0.16, 1, 0.3, 1) f-classicInNext;z-index:2}.f-classicIn.from-prev{animation:var(--f-transition-duration, 0.85s) cubic-bezier(0.16, 1, 0.3, 1) f-classicInPrev;z-index:2}.f-classicOut.to-next{animation:var(--f-transition-duration, 0.85s) cubic-bezier(0.16, 1, 0.3, 1) f-classicOutNext;z-index:1}.f-classicOut.to-prev{animation:var(--f-transition-duration, 0.85s) cubic-bezier(0.16, 1, 0.3, 1) f-classicOutPrev;z-index:1}@keyframes f-classicInNext{0%{transform:translateX(-75px);opacity:0}100%{transform:translate3d(0, 0, 0);opacity:1}}@keyframes f-classicInPrev{0%{transform:translateX(75px);opacity:0}100%{transform:translate3d(0, 0, 0);opacity:1}}@keyframes f-classicOutNext{100%{transform:translateX(-75px);opacity:0}}@keyframes f-classicOutPrev{100%{transform:translateX(75px);opacity:0}}:root{--f-button-width: 40px;--f-button-height: 40px;--f-button-border: 0;--f-button-border-radius: 0;--f-button-color: #374151;--f-button-bg: #f8f8f8;--f-button-hover-bg: #e0e0e0;--f-button-active-bg: #d0d0d0;--f-button-shadow: none;--f-button-transition: all 0.15s ease;--f-button-transform: none;--f-button-svg-width: 20px;--f-button-svg-height: 20px;--f-button-svg-stroke-width: 1.5;--f-button-svg-fill: none;--f-button-svg-filter: none;--f-button-svg-disabled-opacity: 0.65}.f-button{display:flex;justify-content:center;align-items:center;box-sizing:content-box;position:relative;margin:0;padding:0;width:var(--f-button-width);height:var(--f-button-height);border:var(--f-button-border);border-radius:var(--f-button-border-radius);color:var(--f-button-color);background:var(--f-button-bg);box-shadow:var(--f-button-shadow);pointer-events:all;cursor:pointer;transition:var(--f-button-transition)}@media(hover: hover){.f-button:hover:not([disabled]){color:var(--f-button-hover-color);background-color:var(--f-button-hover-bg)}}.f-button:active:not([disabled]){background-color:var(--f-button-active-bg)}.f-button:focus:not(:focus-visible){outline:none}.f-button:focus-visible{outline:none;box-shadow:inset 0 0 0 var(--f-button-outline, 2px) var(--f-button-outline-color, var(--f-button-color))}.f-button svg{width:var(--f-button-svg-width);height:var(--f-button-svg-height);fill:var(--f-button-svg-fill);stroke:currentColor;stroke-width:var(--f-button-svg-stroke-width);stroke-linecap:round;stroke-linejoin:round;transition:opacity .15s ease;transform:var(--f-button-transform);filter:var(--f-button-svg-filter);pointer-events:none}.f-button[disabled]{cursor:default}.f-button[disabled] svg{opacity:var(--f-button-svg-disabled-opacity)}.f-carousel__nav .f-button.is-prev,.f-carousel__nav .f-button.is-next,.fancybox__nav .f-button.is-prev,.fancybox__nav .f-button.is-next{position:absolute;z-index:1}.is-horizontal .f-carousel__nav .f-button.is-prev,.is-horizontal .f-carousel__nav .f-button.is-next,.is-horizontal .fancybox__nav .f-button.is-prev,.is-horizontal .fancybox__nav .f-button.is-next{top:50%;transform:translateY(-50%)}.is-horizontal .f-carousel__nav .f-button.is-prev,.is-horizontal .fancybox__nav .f-button.is-prev{left:var(--f-button-prev-pos)}.is-horizontal .f-carousel__nav .f-button.is-next,.is-horizontal .fancybox__nav .f-button.is-next{right:var(--f-button-next-pos)}.is-horizontal.is-rtl .f-carousel__nav .f-button.is-prev,.is-horizontal.is-rtl .fancybox__nav .f-button.is-prev{left:auto;right:var(--f-button-next-pos)}.is-horizontal.is-rtl .f-carousel__nav .f-button.is-next,.is-horizontal.is-rtl .fancybox__nav .f-button.is-next{right:auto;left:var(--f-button-prev-pos)}.is-vertical .f-carousel__nav .f-button.is-prev,.is-vertical .f-carousel__nav .f-button.is-next,.is-vertical .fancybox__nav .f-button.is-prev,.is-vertical .fancybox__nav .f-button.is-next{top:auto;left:50%;transform:translateX(-50%)}.is-vertical .f-carousel__nav .f-button.is-prev,.is-vertical .fancybox__nav .f-button.is-prev{top:var(--f-button-next-pos)}.is-vertical .f-carousel__nav .f-button.is-next,.is-vertical .fancybox__nav .f-button.is-next{bottom:var(--f-button-next-pos)}.is-vertical .f-carousel__nav .f-button.is-prev svg,.is-vertical .f-carousel__nav .f-button.is-next svg,.is-vertical .fancybox__nav .f-button.is-prev svg,.is-vertical .fancybox__nav .f-button.is-next svg{transform:rotate(90deg)}.f-carousel__nav .f-button:disabled,.fancybox__nav .f-button:disabled{pointer-events:none}html.with-fancybox{width:auto;overflow:visible;scroll-behavior:auto}html.with-fancybox body{touch-action:none}html.with-fancybox body.hide-scrollbar{width:auto;margin-right:calc(var(--fancybox-body-margin, 0px) + var(--fancybox-scrollbar-compensate, 0px));overflow:hidden !important;overscroll-behavior-y:none}.fancybox__container{--fancybox-color: #dbdbdb;--fancybox-hover-color: #fff;--fancybox-bg: rgba(24, 24, 27, 0.98);--fancybox-slide-gap: 10px;--f-spinner-width: 50px;--f-spinner-height: 50px;--f-spinner-color-1: rgba(255, 255, 255, 0.1);--f-spinner-color-2: #bbb;--f-spinner-stroke: 3.65;position:fixed;top:0;left:0;bottom:0;right:0;direction:ltr;display:flex;flex-direction:column;box-sizing:border-box;margin:0;padding:0;color:#f8f8f8;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:visible;z-index:var(--fancybox-zIndex, 1050);outline:none;transform-origin:top left;-webkit-text-size-adjust:100%;-moz-text-size-adjust:none;-ms-text-size-adjust:100%;text-size-adjust:100%;overscroll-behavior-y:contain}.fancybox__container *,.fancybox__container *::before,.fancybox__container *::after{box-sizing:inherit}.fancybox__container::backdrop{background-color:rgba(0,0,0,0)}.fancybox__backdrop{position:fixed;top:0;left:0;bottom:0;right:0;z-index:-1;background:var(--fancybox-bg);opacity:var(--fancybox-opacity, 1);will-change:opacity}.fancybox__carousel{position:relative;box-sizing:border-box;flex:1;min-height:0;z-index:10;overflow-y:visible;overflow-x:clip}.fancybox__viewport{width:100%;height:100%}.fancybox__viewport.is-draggable{cursor:move;cursor:grab}.fancybox__viewport.is-dragging{cursor:move;cursor:grabbing}.fancybox__track{display:flex;margin:0 auto;height:100%}.fancybox__slide{flex:0 0 auto;position:relative;display:flex;flex-direction:column;align-items:center;width:100%;height:100%;margin:0 var(--fancybox-slide-gap) 0 0;padding:4px;overflow:auto;overscroll-behavior:contain;transform:translate3d(0, 0, 0);backface-visibility:hidden}.fancybox__container:not(.is-compact) .fancybox__slide.has-close-btn{padding-top:40px}.fancybox__slide.has-iframe,.fancybox__slide.has-video,.fancybox__slide.has-html5video{overflow:hidden}.fancybox__slide.has-image{overflow:hidden}.fancybox__slide.has-image.is-animating,.fancybox__slide.has-image.is-selected{overflow:visible}.fancybox__slide::before,.fancybox__slide::after{content:\"\";flex:0 0 0;margin:auto}.fancybox__backdrop:empty,.fancybox__viewport:empty,.fancybox__track:empty,.fancybox__slide:empty{display:block}.fancybox__content{align-self:center;display:flex;flex-direction:column;position:relative;margin:0;padding:2rem;max-width:100%;color:var(--fancybox-content-color, #374151);background:var(--fancybox-content-bg, #fff);cursor:default;border-radius:0;z-index:20}.is-loading .fancybox__content{opacity:0}.is-draggable .fancybox__content{cursor:move;cursor:grab}.can-zoom_in .fancybox__content{cursor:zoom-in}.can-zoom_out .fancybox__content{cursor:zoom-out}.is-dragging .fancybox__content{cursor:move;cursor:grabbing}.fancybox__content [data-selectable],.fancybox__content [contenteditable]{cursor:auto}.fancybox__slide.has-image>.fancybox__content{padding:0;background:rgba(0,0,0,0);min-height:1px;background-repeat:no-repeat;background-size:contain;background-position:center center;transition:none;transform:translate3d(0, 0, 0);backface-visibility:hidden}.fancybox__slide.has-image>.fancybox__content>picture>img{width:100%;height:auto;max-height:100%}.is-animating .fancybox__content,.is-dragging .fancybox__content{will-change:transform,width,height}.fancybox-image{margin:auto;display:block;width:100%;height:100%;min-height:0;object-fit:contain;user-select:none;filter:blur(0px)}.fancybox__caption{align-self:center;max-width:100%;flex-shrink:0;margin:0;padding:14px 0 4px 0;overflow-wrap:anywhere;line-height:1.375;color:var(--fancybox-color, currentColor);opacity:var(--fancybox-opacity, 1);cursor:auto;visibility:visible}.is-loading .fancybox__caption,.is-closing .fancybox__caption{opacity:0;visibility:hidden}.is-compact .fancybox__caption{padding-bottom:0}.f-button.is-close-btn{--f-button-svg-stroke-width: 2;position:absolute;top:0;right:8px;z-index:40}.fancybox__content>.f-button.is-close-btn{--f-button-width: 34px;--f-button-height: 34px;--f-button-border-radius: 4px;--f-button-color: var(--fancybox-color, #fff);--f-button-hover-color: var(--fancybox-color, #fff);--f-button-bg: transparent;--f-button-hover-bg: transparent;--f-button-active-bg: transparent;--f-button-svg-width: 22px;--f-button-svg-height: 22px;position:absolute;top:-38px;right:0;opacity:.75}.is-loading .fancybox__content>.f-button.is-close-btn{visibility:hidden}.is-zooming-out .fancybox__content>.f-button.is-close-btn{visibility:hidden}.fancybox__content>.f-button.is-close-btn:hover{opacity:1}.fancybox__footer{padding:0;margin:0;position:relative}.fancybox__footer .fancybox__caption{width:100%;padding:24px;opacity:var(--fancybox-opacity, 1);transition:all .25s ease}.is-compact .fancybox__footer{position:absolute;bottom:0;left:0;right:0;z-index:20;background:rgba(24,24,27,.5)}.is-compact .fancybox__footer .fancybox__caption{padding:12px}.is-compact .fancybox__content>.f-button.is-close-btn{--f-button-border-radius: 50%;--f-button-color: #fff;--f-button-hover-color: #fff;--f-button-outline-color: #000;--f-button-bg: rgba(0, 0, 0, 0.6);--f-button-active-bg: rgba(0, 0, 0, 0.6);--f-button-hover-bg: rgba(0, 0, 0, 0.6);--f-button-svg-width: 18px;--f-button-svg-height: 18px;--f-button-svg-filter: none;top:5px;right:5px}.fancybox__nav{--f-button-width: 50px;--f-button-height: 50px;--f-button-border: 0;--f-button-border-radius: 50%;--f-button-color: var(--fancybox-color);--f-button-hover-color: var(--fancybox-hover-color);--f-button-bg: transparent;--f-button-hover-bg: rgba(24, 24, 27, 0.3);--f-button-active-bg: rgba(24, 24, 27, 0.5);--f-button-shadow: none;--f-button-transition: all 0.15s ease;--f-button-transform: none;--f-button-svg-width: 26px;--f-button-svg-height: 26px;--f-button-svg-stroke-width: 2.5;--f-button-svg-fill: none;--f-button-svg-filter: drop-shadow(1px 1px 1px rgba(24, 24, 27, 0.5));--f-button-svg-disabled-opacity: 0.65;--f-button-next-pos: 1rem;--f-button-prev-pos: 1rem;opacity:var(--fancybox-opacity, 1)}.fancybox__nav .f-button:before{position:absolute;content:\"\";top:-30px;right:-20px;left:-20px;bottom:-30px;z-index:1}.is-idle .fancybox__nav{animation:.15s ease-out both f-fadeOut}.is-idle.is-compact .fancybox__footer{pointer-events:none;animation:.15s ease-out both f-fadeOut}.fancybox__slide>.f-spinner{position:absolute;top:50%;left:50%;margin:var(--f-spinner-top, calc(var(--f-spinner-width) * -0.5)) 0 0 var(--f-spinner-left, calc(var(--f-spinner-height) * -0.5));z-index:30;cursor:pointer}.fancybox-protected{position:absolute;top:0;left:0;right:0;bottom:0;z-index:40;user-select:none}.fancybox-ghost{position:absolute;top:0;left:0;width:100%;height:100%;min-height:0;object-fit:contain;z-index:40;user-select:none;pointer-events:none}.fancybox-focus-guard{outline:none;opacity:0;position:fixed;pointer-events:none}.fancybox__container:not([aria-hidden]){opacity:0}.fancybox__container.is-animated[aria-hidden=false]>*:not(.fancybox__backdrop,.fancybox__carousel),.fancybox__container.is-animated[aria-hidden=false] .fancybox__carousel>*:not(.fancybox__viewport),.fancybox__container.is-animated[aria-hidden=false] .fancybox__slide>*:not(.fancybox__content){animation:var(--f-interface-enter-duration, 0.25s) ease .1s backwards f-fadeIn}.fancybox__container.is-animated[aria-hidden=false] .fancybox__backdrop{animation:var(--f-backdrop-enter-duration, 0.35s) ease backwards f-fadeIn}.fancybox__container.is-animated[aria-hidden=true]>*:not(.fancybox__backdrop,.fancybox__carousel),.fancybox__container.is-animated[aria-hidden=true] .fancybox__carousel>*:not(.fancybox__viewport),.fancybox__container.is-animated[aria-hidden=true] .fancybox__slide>*:not(.fancybox__content){animation:var(--f-interface-exit-duration, 0.15s) ease forwards f-fadeOut}.fancybox__container.is-animated[aria-hidden=true] .fancybox__backdrop{animation:var(--f-backdrop-exit-duration, 0.35s) ease forwards f-fadeOut}.has-iframe .fancybox__content,.has-map .fancybox__content,.has-pdf .fancybox__content,.has-youtube .fancybox__content,.has-vimeo .fancybox__content,.has-html5video .fancybox__content{max-width:100%;flex-shrink:1;min-height:1px;overflow:visible}.has-iframe .fancybox__content,.has-map .fancybox__content,.has-pdf .fancybox__content{width:calc(100% - 120px);height:90%}.fancybox__container.is-compact .has-iframe .fancybox__content,.fancybox__container.is-compact .has-map .fancybox__content,.fancybox__container.is-compact .has-pdf .fancybox__content{width:100%;height:100%}.has-youtube .fancybox__content,.has-vimeo .fancybox__content,.has-html5video .fancybox__content{width:960px;height:540px;max-width:100%;max-height:100%}.has-map .fancybox__content,.has-pdf .fancybox__content,.has-youtube .fancybox__content,.has-vimeo .fancybox__content,.has-html5video .fancybox__content{padding:0;background:rgba(24,24,27,.9);color:#fff}.has-map .fancybox__content{background:#e5e3df}.fancybox__html5video,.fancybox__iframe{border:0;display:block;height:100%;width:100%;background:rgba(0,0,0,0)}.fancybox-placeholder{border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important;-webkit-clip-path:inset(50%) !important;clip-path:inset(50%) !important;height:1px !important;margin:-1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;width:1px !important;white-space:nowrap !important}.f-carousel__thumbs{--f-thumb-width: 96px;--f-thumb-height: 72px;--f-thumb-outline: 0;--f-thumb-outline-color: #5eb0ef;--f-thumb-opacity: 1;--f-thumb-hover-opacity: 1;--f-thumb-selected-opacity: 1;--f-thumb-border-radius: 2px;--f-thumb-offset: 0px;--f-button-next-pos: 0;--f-button-prev-pos: 0}.f-carousel__thumbs.is-classic{--f-thumb-gap: 8px;--f-thumb-opacity: 0.5;--f-thumb-hover-opacity: 1;--f-thumb-selected-opacity: 1}.f-carousel__thumbs.is-modern{--f-thumb-gap: 4px;--f-thumb-extra-gap: 16px;--f-thumb-clip-width: 46px}.f-thumbs{position:relative;flex:0 0 auto;margin:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);user-select:none;perspective:1000px;transform:translateZ(0)}.f-thumbs .f-spinner{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:2px;background-image:linear-gradient(#ebeff2, #e2e8f0);z-index:-1}.f-thumbs .f-spinner svg{display:none}.f-thumbs.is-vertical{height:100%}.f-thumbs__viewport{width:100%;height:auto;overflow:hidden;transform:translate3d(0, 0, 0)}.f-thumbs__track{display:flex}.f-thumbs__slide{position:relative;flex:0 0 auto;box-sizing:content-box;display:flex;align-items:center;justify-content:center;padding:0;margin:0;width:var(--f-thumb-width);height:var(--f-thumb-height);overflow:visible;cursor:pointer}.f-thumbs__slide.is-loading img{opacity:0}.is-classic .f-thumbs__viewport{height:100%}.is-modern .f-thumbs__track{width:max-content}.is-modern .f-thumbs__track::before{content:\"\";position:absolute;top:0;bottom:0;left:calc((var(--f-thumb-clip-width, 0))*-0.5);width:calc(var(--width, 0)*1px + var(--f-thumb-clip-width, 0));cursor:pointer}.is-modern .f-thumbs__slide{width:var(--f-thumb-clip-width);transform:translate3d(calc(var(--shift, 0) * -1px), 0, 0);transition:none;pointer-events:none}.is-modern.is-resting .f-thumbs__slide{transition:transform .33s ease}.is-modern.is-resting .f-thumbs__slide__button{transition:clip-path .33s ease}.is-using-tab .is-modern .f-thumbs__slide:focus-within{filter:drop-shadow(-1px 0px 0px var(--f-thumb-outline-color)) drop-shadow(2px 0px 0px var(--f-thumb-outline-color)) drop-shadow(0px -1px 0px var(--f-thumb-outline-color)) drop-shadow(0px 2px 0px var(--f-thumb-outline-color))}.f-thumbs__slide__button{appearance:none;width:var(--f-thumb-width);height:100%;margin:0 -100% 0 -100%;padding:0;border:0;position:relative;border-radius:var(--f-thumb-border-radius);overflow:hidden;background:rgba(0,0,0,0);outline:none;cursor:pointer;pointer-events:auto;touch-action:manipulation;opacity:var(--f-thumb-opacity);transition:opacity .2s ease}.f-thumbs__slide__button:hover{opacity:var(--f-thumb-hover-opacity)}.f-thumbs__slide__button:focus:not(:focus-visible){outline:none}.f-thumbs__slide__button:focus-visible{outline:none;opacity:var(--f-thumb-selected-opacity)}.is-modern .f-thumbs__slide__button{--clip-path: inset( 0 calc( ((var(--f-thumb-width, 0) - var(--f-thumb-clip-width, 0))) * (1 - var(--progress, 0)) * 0.5 ) round var(--f-thumb-border-radius, 0) );clip-path:var(--clip-path)}.is-classic .is-nav-selected .f-thumbs__slide__button{opacity:var(--f-thumb-selected-opacity)}.is-classic .is-nav-selected .f-thumbs__slide__button::after{content:\"\";position:absolute;top:0;left:0;right:0;height:auto;bottom:0;border:var(--f-thumb-outline, 0) solid var(--f-thumb-outline-color, transparent);border-radius:var(--f-thumb-border-radius);animation:f-fadeIn .2s ease-out;z-index:10}.f-thumbs__slide__img{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:var(--f-thumb-offset);box-sizing:border-box;pointer-events:none;object-fit:cover;border-radius:var(--f-thumb-border-radius)}.f-thumbs.is-horizontal .f-thumbs__track{padding:8px 0 12px 0}.f-thumbs.is-horizontal .f-thumbs__slide{margin:0 var(--f-thumb-gap) 0 0}.f-thumbs.is-vertical .f-thumbs__track{flex-wrap:wrap;padding:0 8px}.f-thumbs.is-vertical .f-thumbs__slide{margin:0 0 var(--f-thumb-gap) 0}.fancybox__thumbs{--f-thumb-width: 96px;--f-thumb-height: 72px;--f-thumb-border-radius: 2px;--f-thumb-outline: 2px;--f-thumb-outline-color: #ededed;position:relative;opacity:var(--fancybox-opacity, 1);transition:max-height .35s cubic-bezier(0.23, 1, 0.32, 1)}.fancybox__thumbs.is-classic{--f-thumb-gap: 8px;--f-thumb-opacity: 0.5;--f-thumb-hover-opacity: 1}.fancybox__thumbs.is-classic .f-spinner{background-image:linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))}.fancybox__thumbs.is-modern{--f-thumb-gap: 4px;--f-thumb-extra-gap: 16px;--f-thumb-clip-width: 46px;--f-thumb-opacity: 1;--f-thumb-hover-opacity: 1}.fancybox__thumbs.is-modern .f-spinner{background-image:linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))}.fancybox__thumbs.is-horizontal{padding:0 var(--f-thumb-gap)}.fancybox__thumbs.is-vertical{padding:var(--f-thumb-gap) 0}.is-compact .fancybox__thumbs{--f-thumb-width: 64px;--f-thumb-clip-width: 32px;--f-thumb-height: 48px;--f-thumb-extra-gap: 10px}.fancybox__thumbs.is-masked{max-height:0px !important}.is-closing .fancybox__thumbs{transition:none !important}.fancybox__toolbar{--f-progress-color: var(--fancybox-color, rgba(255, 255, 255, 0.94));--f-button-width: 46px;--f-button-height: 46px;--f-button-color: var(--fancybox-color);--f-button-hover-color: var(--fancybox-hover-color);--f-button-bg: rgba(24, 24, 27, 0.65);--f-button-hover-bg: rgba(70, 70, 73, 0.65);--f-button-active-bg: rgba(90, 90, 93, 0.65);--f-button-border-radius: 0;--f-button-svg-width: 24px;--f-button-svg-height: 24px;--f-button-svg-stroke-width: 1.5;--f-button-svg-filter: drop-shadow(1px 1px 1px rgba(24, 24, 27, 0.15));--f-button-svg-fill: none;--f-button-svg-disabled-opacity: 0.65;display:flex;flex-direction:row;justify-content:space-between;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI Adjusted\",\"Segoe UI\",\"Liberation Sans\",sans-serif;color:var(--fancybox-color, currentColor);opacity:var(--fancybox-opacity, 1);text-shadow:var(--fancybox-toolbar-text-shadow, 1px 1px 1px rgba(0, 0, 0, 0.5));pointer-events:none;z-index:20}.fancybox__toolbar :focus-visible{z-index:1}.fancybox__toolbar.is-absolute,.is-compact .fancybox__toolbar{position:absolute;top:0;left:0;right:0}.is-idle .fancybox__toolbar{pointer-events:none;animation:.15s ease-out both f-fadeOut}.fancybox__toolbar__column{display:flex;flex-direction:row;flex-wrap:wrap;align-content:flex-start}.fancybox__toolbar__column.is-left,.fancybox__toolbar__column.is-right{flex-grow:1;flex-basis:0}.fancybox__toolbar__column.is-right{display:flex;justify-content:flex-end;flex-wrap:nowrap}.fancybox__infobar{padding:0 5px;line-height:var(--f-button-height);text-align:center;font-size:17px;font-variant-numeric:tabular-nums;-webkit-font-smoothing:subpixel-antialiased;cursor:default;user-select:none}.fancybox__infobar span{padding:0 5px}.fancybox__infobar:not(:first-child):not(:last-child){background:var(--f-button-bg)}[data-fancybox-toggle-slideshow]{position:relative}[data-fancybox-toggle-slideshow] .f-progress{height:100%;opacity:.3}[data-fancybox-toggle-slideshow] svg g:first-child{display:flex}[data-fancybox-toggle-slideshow] svg g:last-child{display:none}.has-slideshow [data-fancybox-toggle-slideshow] svg g:first-child{display:none}.has-slideshow [data-fancybox-toggle-slideshow] svg g:last-child{display:flex}[data-fancybox-toggle-fullscreen] svg g:first-child{display:flex}[data-fancybox-toggle-fullscreen] svg g:last-child{display:none}:fullscreen [data-fancybox-toggle-fullscreen] svg g:first-child{display:none}:fullscreen [data-fancybox-toggle-fullscreen] svg g:last-child{display:flex}.f-progress{position:absolute;top:0;left:0;right:0;height:3px;transform:scaleX(0);transform-origin:0;transition-property:transform;transition-timing-function:linear;background:var(--f-progress-color, var(--f-carousel-theme-color, #0091ff));z-index:30;user-select:none;pointer-events:none}";
styleInject(css_248z$1);

const EditorContent = ({ onFocus, onBlur, }) => {
    const { editor } = useEditorData();
    const handleClick = useCallback((e) => {
        if (e.target.closest('img')) {
            const img = e.target.closest('img');
            Fancybox.show([
                {
                    src: img.src,
                },
            ]);
        }
    }, []);
    const handlePaste = useCallback((e) => {
        console.log(e);
    }, []);
    return (jsxRuntimeExports.jsx(EditorContent$1, { editor: editor, className: "editor-content", onClick: handleClick, onFocus: onFocus, onBlur: onBlur, onPaste: handlePaste }));
};

const Editor = ({ config, value, onChange, onFocus, onBlur, }) => {
    const setting = {
        placeholder: 'Enter content...',
        menubar: [
            'bold',
            'italic',
            'underline',
            'strike',
            'bullet-list',
            'ordered-list',
            'text-align',
        ],
    };
    const mergedConfig = Object.assign(setting, config);
    const extensions = useMemo(() => {
        const extensions = [
            Document,
            Paragraph,
            Text,
            Placeholder.configure({
                placeholder: mergedConfig.placeholder,
            }),
        ];
        if (mergedConfig.menubar.includes('bold')) {
            extensions.push(Bold$1);
        }
        if (mergedConfig.menubar.includes('italic')) {
            extensions.push(Italic$1);
        }
        if (mergedConfig.menubar.includes('underline')) {
            extensions.push(Underline$1);
        }
        if (mergedConfig.menubar.includes('strike')) {
            extensions.push(Strike$1);
        }
        if (mergedConfig.menubar.includes('link')) {
            extensions.push(Link$1.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: 'https',
                protocols: ['http', 'https'],
            }));
        }
        if (mergedConfig.menubar.includes('image')) {
            extensions.push(Image$1.configure({
                inline: true,
                allowBase64: true,
            }));
        }
        if (mergedConfig.menubar.includes('mention')) {
            const Content = forwardRef((props, ref) => {
                const [selectedIndex, setSelectedIndex] = useState(0);
                const selectItem = (index) => {
                    const item = props.items[index];
                    if (item) {
                        props.command(item);
                    }
                };
                const upHandler = () => {
                    setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length);
                };
                const downHandler = () => {
                    setSelectedIndex((selectedIndex + 1) % props.items.length);
                };
                const enterHandler = () => {
                    selectItem(selectedIndex);
                };
                useImperativeHandle(ref, () => ({
                    onKeyDown: ({ event }) => {
                        if (event.key === 'ArrowUp') {
                            upHandler();
                            return true;
                        }
                        if (event.key === 'ArrowDown') {
                            downHandler();
                            return true;
                        }
                        if (event.key === 'Enter') {
                            enterHandler();
                            return true;
                        }
                        return false;
                    },
                }));
                return (jsxRuntimeExports.jsx("div", { className: "dropdown-suggestion", children: props.items.length ? (props.items.map((item, index) => (jsxRuntimeExports.jsx("a", { className: index === selectedIndex ? 'is-selected' : '', onClick: () => selectItem(index), children: item.label }, index)))) : (jsxRuntimeExports.jsx("div", { className: "item", children: "No result" })) }));
            });
            extensions.push(Mention$1.configure({
                renderHTML({ node, options }) {
                    return [
                        'span',
                        {
                            'data-id': node.attrs.id,
                            class: 'mention',
                        },
                        `${options.suggestion.char}${node.attrs.label}`,
                    ];
                },
                suggestion: {
                    items: ({ query }) => {
                        return mergedConfig.getSuggestion
                            ? mergedConfig.getSuggestion(query)
                            : [];
                    },
                    render() {
                        let component;
                        let popup;
                        return {
                            onStart(props) {
                                component = new ReactRenderer(Content, {
                                    props,
                                    editor: props.editor,
                                });
                                // @ts-ignore
                                popup = tippy('body', {
                                    getReferenceClientRect: props.clientRect,
                                    appendTo: () => document.body,
                                    content: component.element,
                                    showOnCreate: true,
                                    interactive: true,
                                    trigger: 'manual',
                                    placement: 'bottom-start',
                                });
                            },
                            onUpdate(props) {
                                var _a;
                                component.updateProps(props);
                                if (!props.clientRect) {
                                    return;
                                }
                                (_a = popup === null || popup === void 0 ? void 0 : popup[0]) === null || _a === void 0 ? void 0 : _a.setProps({
                                    getReferenceClientRect: props.clientRect,
                                });
                            },
                            onKeyDown(props) {
                                var _a, _b;
                                if (props.event.key === 'Escape') {
                                    (_a = popup === null || popup === void 0 ? void 0 : popup[0]) === null || _a === void 0 ? void 0 : _a.hide();
                                    return true;
                                }
                                return (_b = component.ref) === null || _b === void 0 ? void 0 : _b.onKeyDown(props);
                            },
                            onExit() {
                                var _a;
                                (_a = popup === null || popup === void 0 ? void 0 : popup[0]) === null || _a === void 0 ? void 0 : _a.destroy();
                                component === null || component === void 0 ? void 0 : component.destroy();
                            },
                        };
                    },
                },
            }));
        }
        if (mergedConfig.menubar.includes('blockquote')) {
            extensions.push(Blockquote$1);
        }
        if (mergedConfig.menubar.includes('bullet-list') ||
            mergedConfig.menubar.includes('ordered-list')) {
            extensions.push(ListItem);
        }
        if (mergedConfig.menubar.includes('bullet-list')) {
            extensions.push(BulletList$1);
        }
        if (mergedConfig.menubar.includes('ordered-list')) {
            extensions.push(OrderedList$1);
        }
        if (mergedConfig.menubar.includes('code-block')) {
            extensions.push(CodeBlock$1);
        }
        if (mergedConfig.menubar.find((a) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(a))) {
            extensions.push(Heading$1);
        }
        if (mergedConfig.menubar.includes('text-align')) {
            extensions.push(TextAlign$1.configure({
                types: ['paragraph'],
            }));
        }
        return extensions;
    }, [mergedConfig]);
    const editor = useEditor({
        extensions,
        content: value,
    });
    if (!editor) {
        return null;
    }
    editor.on('update', (e) => {
        if (onChange) {
            onChange(e.editor.getHTML());
        }
    });
    const store = {
        editor,
        config: mergedConfig,
    };
    return (jsxRuntimeExports.jsx(EditorProvider, { store: store, children: jsxRuntimeExports.jsxs("div", { className: `editor ${mergedConfig.className || ''}`, children: [jsxRuntimeExports.jsx(EditorContent, { onFocus: onFocus, onBlur: onBlur }), jsxRuntimeExports.jsx(EditorMenu, { items: mergedConfig.menubar })] }) }));
};

var css_248z = ".app {\r\n  padding: 20px;\r\n}\r\n\r\n.editor {\r\n  background-color: white;\r\n  border: 1px solid #565557;\r\n  box-sizing: border-box;\r\n  border-radius: 6px;\r\n  padding: 0;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  position: relative;\r\n  overflow-y: visible;\r\n}\r\n\r\n.editor-content {\r\n  padding: 0;\r\n  display: flex;\r\n}\r\n\r\n.editor-content .ProseMirror {\r\n  padding: 10px;\r\n  outline: none;\r\n  width: 100%;\r\n  min-height: 100px;\r\n  cursor: text;\r\n  line-height: 1.4;\r\n}\r\n\r\n.editor-content .ProseMirror p {\r\n  margin: 0 0 9px 0;\r\n}\r\n\r\n.editor-content .ProseMirror ul p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.editor .editor-menu {\r\n  background-color: transparent;\r\n  z-index: 1;\r\n  align-items: center;\r\n  gap: 4px;\r\n  width: auto;\r\n  padding: 6px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.editor .editor-menu a {\r\n  text-decoration: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: black;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  background-color: transparent;\r\n  border-radius: 4px;\r\n}\r\n\r\n.editor .editor-menu a:hover,\r\n.editor .editor-menu a.active {\r\n  background-color: #dfdfdf;\r\n}\r\n\r\n.editor .editor-menu a svg {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.editor .editor-menu .separation {\r\n  border-left: 1px solid #bdbdbd;\r\n  height: 18px;\r\n  pointer-events: none;\r\n  margin: 0 3px;\r\n}\r\n\r\n.editor .editor-content p.is-editor-empty:first-child::before {\r\n  color: #adb5bd;\r\n  content: attr(data-placeholder);\r\n  float: left;\r\n  height: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.editor .editor-content blockquote {\r\n  margin: 0;\r\n  padding: 5px 0 5px 10px;\r\n  border-left: 4px solid #ddd;\r\n}\r\n\r\n.editor .editor-content blockquote p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.editor .editor-content pre {\r\n  background: black;\r\n  border-radius: 0.5rem;\r\n  color: white;\r\n  font-family: monospace;\r\n  margin: 0 0 15px 0;\r\n  padding: 0.75rem 1rem;\r\n}\r\n\r\n.editor .editor-content pre code {\r\n  background: none;\r\n  color: inherit;\r\n  font-size: 0.8rem;\r\n  padding: 0;\r\n}\r\n\r\n.editor .editor-content img {\r\n  display: inline-block;\r\n  width: 120px;\r\n  height: 80px;\r\n  object-fit: contain;\r\n  cursor: zoom-in;\r\n  border: 1px solid #8d8d8d;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n}\r\n\r\n.editor .mention {\r\n  background-color: rgba(0, 17, 255, 0.05);\r\n  border-radius: 0.4rem;\r\n  box-decoration-break: clone;\r\n  color: #0011ff;\r\n  padding: 0.1rem 0.3rem;\r\n}\r\n\r\n.editor .mention::after {\r\n  content: '\\200B';\r\n}\r\n\r\n.tippy-box .dropdown-suggestion {\r\n  background: white;\r\n  border: 1px solid rgba(61, 37, 20, 0.05);\r\n  border-radius: 0.7rem;\r\n  box-shadow:\r\n    0px 12px 33px 0px rgba(0, 0, 0, 0.06),\r\n    0px 3.618px 9.949px 0px rgba(0, 0, 0, 0.04);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.1rem;\r\n  overflow: auto;\r\n  padding: 0.4rem;\r\n  position: relative;\r\n}\r\n\r\n.tippy-box .dropdown-suggestion a {\r\n  background-color: transparent;\r\n  display: block;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.tippy-box .dropdown-suggestion a:hover,\r\n.tippy-box .dropdown-suggestion a:hover.is-selected {\r\n  background-color: rgba(61, 37, 20, 0.12);\r\n}\r\n\r\n.tippy-box .dropdown-suggestion a.is-selected {\r\n  background-color: rgba(61, 37, 20, 0.08);\r\n}\r\n";
styleInject(css_248z);

export { Editor };
