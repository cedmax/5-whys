import React, { useCallback, useRef, useEffect } from 'react';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import { ProblemLabel } from 'components/UI/Problem';
import { WhyLabel, Wrapper } from 'components/UI/Why';

export default ({ onSave, draft = {}, active, parent }) => {
  const form = useRef();
  const input = useRef();
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const formData = new FormData(form.current);
      const content = formData.get('toSave');
      content && onSave({ ...draft, content });
    },
    [onSave, draft]
  );

  useEffect(() => {
    input.current && input.current.focus();
  }, [input]);

  const isProblem = !parent;
  const Label = isProblem ? ProblemLabel : WhyLabel;

  return (
    (parent === active || !active) && (
      <Wrapper as="form" ref={form} onSubmit={onSubmit}>
        <Label htmlFor="toSave">
          {isProblem ? 'Problem Statement' : 'Why?'}
        </Label>
        <Input
          id="toSave"
          ref={input}
          isProblem={isProblem}
          defaultValue={draft.content || ''}
          type="text"
          name="toSave"
        />
        <Button type="submit">add</Button>
      </Wrapper>
    )
  );
};
