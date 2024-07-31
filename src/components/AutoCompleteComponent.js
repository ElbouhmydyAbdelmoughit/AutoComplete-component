// src/components/CustomAutocomplete.js
import React from 'react';
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/useAutocomplete';

const CustomAutocomplete = ({
  options,
  onChange,
  className = '',
  label = 'Select an movie',
  multiple = false,
}) => {
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
  } = useAutocomplete({
    options,
    onChange: (_, value) => {
      if (Array.isArray(value)) {
        onChange(value);
      } else if (value !== null && typeof value === 'object') {
        onChange(value);
      } else {
        onChange(null);
      }
    },
    multiple,
  });

  return (
    <div className={`relative ${className}`}>
      <div {...getRootProps()} className="flex flex-col">
        <div className="flex flex-wrap gap-2 mb-2">
          {multiple && value && value.map((option, index) => (
            <Tag key={option.label} label={option.label} {...getTagProps({ index })} />
          ))}
          <InputField
            inputProps={getInputProps()}
            focused={focused}
            value={value}
            label={label}
          />
        </div>
        {groupedOptions.length > 0 && (
          <OptionList
            listboxProps={getListboxProps()}
            options={groupedOptions}
            getOptionProps={getOptionProps}
          />
        )}
      </div>
    </div>
  );
};

CustomAutocomplete.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  multiple: PropTypes.bool,
};

const Tag = ({ label, onDelete, ...other }) => (
  <div
    {...other}
    className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm flex items-center"
  >
    {label}
    <button
      type="button"
      onClick={onDelete}
      className="ml-2 text-white hover:bg-blue-700 transition-colors"
    >
      ✕
    </button>
  </div>
);

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const InputField = ({ inputProps, label, focused, value }) => (
  <div className="relative w-full">
    <input
      {...inputProps}
      className={`w-full border rounded-lg py-2 px-3 placeholder-transparent focus:outline-none ${
        focused ? 'border-blue-500' : 'border-gray-300'
      }`}
      placeholder=" test"
    />
    <label
      className={`absolute top-1/2 left-3 transform -translate-y-1/2 transition-all duration-200 ${
        focused || value ? '-top-2 text-xs text-blue-500' : 'top-1/2 text-gray-500'
      }`}
    >
      {label}
    </label>
  </div>
);

InputField.propTypes = {
  inputProps: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
  value: PropTypes.any,
};

const OptionList = ({ listboxProps, options, getOptionProps }) => (
  <ul
    {...listboxProps}
    className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto z-10"
  >
    {options.map((option, index) => (
      <li
        {...getOptionProps({ option, index })}
        key={option.label}
        className="px-4 py-2 hover:bg-blue-100 cursor-pointer rounded-lg transition-colors duration-150"
      >
        {option.label}
      </li>
    ))}
  </ul>
);

OptionList.propTypes = {
  listboxProps: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  getOptionProps: PropTypes.func.isRequired,
};

export default CustomAutocomplete;
