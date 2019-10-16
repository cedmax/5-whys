import React, { useCallback, useRef, useEffect } from 'react';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import { ProblemLabel, WhyLabel } from 'components/UI/Labels';

export default ({ addContent, active, level, parent }) => {
  const form = useRef();
  const input = useRef();
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const formData = new FormData(form.current);
      const content = formData.get('toSave');
      content && addContent(content);
    },
    [addContent]
  );

  useEffect(() => {
    console.log('in');
    input.current && input.current.focus();
  }, [input]);

  const isProblem = level === 0;
  const Label = isProblem ? ProblemLabel : WhyLabel;

  return (
    level === active.level &&
    (parent === active.content || !parent) && (
      <form ref={form} onSubmit={onSubmit}>
        <Label htmlFor="toSave">
          {isProblem ? 'Problem Statement' : 'Why?'}
        </Label>
        <Input ref={input} isProblem={isProblem} type="text" name="toSave" />
        <Button type="submit">add</Button>
      </form>
    )
  );
};
