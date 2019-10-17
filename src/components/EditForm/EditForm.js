import React, { useCallback, useRef, useEffect } from 'react';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import { WhyLabel, Wrapper } from 'components/UI/Why';

export default ({ saveContent, draft }) => {
  const form = useRef();
  const input = useRef();
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const formData = new FormData(form.current);
      const content = formData.get('toSave');
      content && saveContent({ ...draft, content });
    },
    [saveContent, draft]
  );

  useEffect(() => {
    input.current && input.current.focus();
  }, [input]);

  const Label = WhyLabel;

  return (
    <Wrapper as="form" ref={form} onSubmit={onSubmit}>
      <Label htmlFor="toSave">Why?</Label>
      <Input
        id="toSave"
        ref={input}
        defaultValue={draft.content}
        type="text"
        name="toSave"
      />
      <Button type="submit">add</Button>
    </Wrapper>
  );
};
