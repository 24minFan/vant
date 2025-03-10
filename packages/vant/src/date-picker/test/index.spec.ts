import { nextTick } from 'vue';
import { later, mount } from '../../../test';
import DatePicker from '..';
import type {
  PickerOption,
  PickerCancelEventParams,
  PickerConfirmEventParams,
} from '../../picker';

test('should emit confirm event correctly', async () => {
  const minDate = new Date(2030, 0, 1);

  const wrapper = mount(DatePicker, {
    props: {
      minDate,
    },
  });

  await later();
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0]).toEqual(
    {
      selectedOptions: [
        { text: '2030', value: '2030' },
        { text: '01', value: '01' },
        { text: '01', value: '01' },
      ],
      selectedValues: ['2030', '01', '01'],
    }
  );
});

test('should emit cancel event correctly', async () => {
  const minDate = new Date(2030, 0, 1);
  const wrapper = mount(DatePicker, {
    props: {
      minDate,
    },
  });

  await later();
  wrapper.find('.van-picker__cancel').trigger('click');
  expect(wrapper.emitted<[PickerCancelEventParams]>('cancel')![0][0]).toEqual({
    selectedOptions: [
      { text: '2030', value: '2030' },
      { text: '01', value: '01' },
      { text: '01', value: '01' },
    ],
    selectedValues: ['2030', '01', '01'],
  });
});

test('should allow to dynamically set value', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: ['2020', '01', '01'],
      minDate: new Date(2019, 0, 1),
    },
  });

  await wrapper.setProps({ modelValue: ['2020', '02', '02'] });
  await wrapper.find('.van-picker__confirm').trigger('click');
  await wrapper.setProps({ modelValue: ['2020', '03', '03'] });
  await wrapper.find('.van-picker__confirm').trigger('click');

  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0].selectedValues
  ).toEqual(['2020', '02', '02']);
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![1][0].selectedValues
  ).toEqual(['2020', '03', '03']);
});

test('should render with max-date correctly', async () => {
  const maxDate = new Date(2010, 1, 1);
  const minDate = new Date(2000, 1, 1);
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: ['2020', '10', '10'],
      minDate,
      maxDate,
      'onUpdate:modelValue': (newVal: string[]) => {
        nextTick(() => {
          wrapper.setProps({
            modelValue: newVal,
          });
        });
      },
    },
  });

  await later();
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0].selectedValues
  ).toEqual(['2010', '01', '10']);
});

test('should render with min-date correctly', async () => {
  const maxDate = new Date(2010, 1, 1);
  const minDate = new Date(2000, 1, 1);
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: ['1990', '10', '10'],
      minDate,
      maxDate,
      'onUpdate:modelValue': (newVal: string[]) => {
        nextTick(() => {
          wrapper.setProps({
            modelValue: newVal,
          });
        });
      },
    },
  });

  await later();
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0].selectedValues
  ).toEqual(['2000', '10', '10']);
});

test('should render title slot correctly', () => {
  const wrapper = mount(DatePicker, {
    slots: {
      title: () => 'Custom title',
    },
  });

  expect(wrapper.find('.van-picker__toolbar').html()).toMatchSnapshot();
});

function filter(type: string, options: PickerOption[]): PickerOption[] {
  return options.filter((option) => Number(option.value) % 10 === 0);
}

test('should filter options when using filter prop', () => {
  const maxDate = new Date(2010, 1, 1);
  const minDate = new Date(2000, 1, 1);
  const wrapper = mount(DatePicker, {
    props: {
      filter,
      maxDate,
      minDate,
      modelValue: ['2005', '01', '01'],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should format options correctly when using formatter prop', async () => {
  const formatter = (type: string, option: PickerOption): PickerOption => {
    option.text = `${option.text} ${type}`;
    return option;
  };
  const maxDate = new Date(2010, 1, 1);
  const minDate = new Date(2000, 1, 1);
  const wrapper = mount(DatePicker, {
    props: {
      filter,
      formatter,
      maxDate,
      minDate,
      modelValue: ['2005', '01', '01'],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should update value correctly when dynamically change min-date', async () => {
  const maxDate = new Date(2050, 1, 1);
  const minDate = new Date(2000, 1, 1);
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: ['2005', '10', '10'],
      minDate,
      maxDate,
      'onUpdate:modelValue': (newVal: string[]) => {
        nextTick(() => {
          wrapper.setProps({
            modelValue: newVal,
          });
        });
      },
    },
  });

  await later();
  await wrapper.setProps({
    minDate: new Date(2020, 11, 20),
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0].selectedValues
  ).toEqual(['2020', '12', '20']);
});
