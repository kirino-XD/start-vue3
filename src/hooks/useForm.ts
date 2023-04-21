export const useFormData = <T extends Object>(data: T) => {
  const _initForm = JSON.parse(JSON.stringify(data));
  let _cacheForm = _initForm;
  const formData = reactive(data);
  const getCacheForm = () => {
    return _cacheForm;
  };
  const updateCacheForm = () => {
    const f = toRaw(formData);
    _cacheForm = JSON.parse(JSON.stringify(f));
  };
  const resetCacheForm = () => {
    Object.assign(formData, _cacheForm);
  };
  const updateForm = (value: T) => {
    Object.assign(formData, value);
  };
  const resetForm = () => {
    Object.assign(formData, _initForm);
  };
  // 更新
  return {
    formData,
    formObj: {
      getCacheForm,
      updateCacheForm,
      resetCacheForm,
      updateForm,
      resetForm,
    },
  };
};
