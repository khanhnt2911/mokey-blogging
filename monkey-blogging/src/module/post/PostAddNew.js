import React, { useState } from "react";
import DashboardHeading from "module/dashboard/DashboardHeading";
import { useForm } from "react-hook-form";
import { Field, FieldCheckboxes } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import ImageUpload from "components/image/ImageUpload";
import { Dropdown } from "components/dropdown";
import { Radio } from "components/checkbox";
import { Button } from "components/button";
import { postStatus } from "utils/constants";
import slugify from "slugify";

import useFirebase from "hooks/useFirebase";
import Toggle from "components/toggle/Toggle";

const PostAddNew = () => {
  const { control, watch, setValue, getValues, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      status: "",
      title: "",
      slug: "",
      category: "",
      hot: false,
    },
  });
  const watchStatus = watch("status");
  const watchCategory = watch("category");
  const watchHot = watch("hot");
  const { image, handleSelectImage, handleDeleteImage, progress } = useFirebase(
    setValue,
    getValues
  );

  const addPostHandler = async (values) => {
    const cloneValues = { ...values };
    console.log(cloneValues);
    cloneValues.slug = slugify(cloneValues.slug || cloneValues.title);
    cloneValues.status = Number(cloneValues.status);

    // handleUploadImage(cloneValues.file);
  };

  return (
    <>
      <DashboardHeading title="Add post" desc="Add new post"></DashboardHeading>
      <form onSubmit={handleSubmit(addPostHandler)}>
        <div className="form-layout">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
              required
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Image</Label>
            <ImageUpload
              className="h-[250px]"
              onChange={handleSelectImage}
              progress={progress}
              image={image}
              handleDeleteImage={handleDeleteImage}
            ></ImageUpload>
          </Field>
          <Field>
            <Label>Category</Label>
            <Dropdown></Dropdown>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Feature post</Label>
            <Toggle
              on={watchHot === true}
              onClick={() => {
                setValue("hot", !watchHot);
              }}
            ></Toggle>
          </Field>
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                checked={Number(watchStatus) === postStatus.APPROVED}
                value={postStatus.APPROVED}
                control={control}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                checked={Number(watchStatus) === postStatus.PENDING}
                value={postStatus.PENDING}
                control={control}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                checked={Number(watchStatus) === postStatus.REJECTED}
                value={postStatus.REJECTED}
                control={control}
              >
                Reject
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button
          type="submit"
          className="mx-auto w-[250px]"
          // isLoading={loading}
          // disabled={loading}
        >
          Add new post
        </Button>
      </form>
    </>
  );
};

export default PostAddNew;
