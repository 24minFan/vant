import {
  watch,
  provide,
  computed,
  defineComponent,
  type PropType,
  type InjectionKey,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';
import {
  inBrowser,
  kebabCase,
  makeStringProp,
  createNamespace,
  type Numeric,
} from '../utils';

const [name, bem] = createNamespace('config-provider');

export type ConfigProviderTheme = 'light' | 'dark';

export type ConfigProviderProvide = {
  iconPrefix?: string;
};

export const CONFIG_PROVIDER_KEY: InjectionKey<ConfigProviderProvide> =
  Symbol(name);

const configProviderProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  theme: makeStringProp<ConfigProviderTheme>('light'),
  themeVars: Object as PropType<Record<string, Numeric>>,
  iconPrefix: String,
};

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;

function mapThemeVarsToCSSVars(themeVars: Record<string, Numeric>) {
  const cssVars: Record<string, Numeric> = {};
  Object.keys(themeVars).forEach((key) => {
    cssVars[`--van-${kebabCase(key)}`] = themeVars[key];
  });
  return cssVars;
}

export default defineComponent({
  name,

  props: configProviderProps,

  setup(props, { slots }) {
    const style = computed<CSSProperties | undefined>(() => {
      if (props.themeVars) {
        return mapThemeVarsToCSSVars(props.themeVars);
      }
    });

    if (inBrowser) {
      watch(
        () => props.theme,
        (newVal, oldVal) => {
          document.body.classList.remove(`van-theme-${oldVal}`);
          document.body.classList.add(`van-theme-${newVal}`);
        },
        { immediate: true }
      );
    }

    provide(CONFIG_PROVIDER_KEY, props);

    return () => (
      <props.tag class={bem()} style={style.value}>
        {slots.default?.()}
      </props.tag>
    );
  },
});
