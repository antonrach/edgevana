import axios from 'axios';
import { Url } from 'next/dist/shared/lib/router/router';
import React from 'react';

interface submitFormRequestArgs {
  setIsLoading: (value: React.SetStateAction<boolean>) => void;
  setServerError: (value: React.SetStateAction<boolean>) => void;
  serverError: boolean;
  data: { [key: string] : string };
  fetchUrl: string;
  nextPageUrl: string;
  push: (url: Url, as?: Url | undefined, options?: any) => Promise<boolean>;
  disableLoadingAfterSuccess?: boolean;
};

const submitFormRequest = async ({
  setIsLoading,
  setServerError,
  serverError,
  data,
  fetchUrl,
  nextPageUrl,
  push,
  disableLoadingAfterSuccess = false,
}: submitFormRequestArgs) => {
  try {
    setIsLoading(true);
    if (serverError) {
      setServerError(false);
    }
    const { data: resData } = await axios.post(
      fetchUrl,
      { ...data },
    );
    if (!resData.success) {
      setServerError(true);
      setIsLoading(false);
      return;
    }
    push(nextPageUrl);
    if (disableLoadingAfterSuccess) {
      setIsLoading(false);
    }
  } catch(e) {
      setServerError(true);
      setIsLoading(false);  
  }
};

export default submitFormRequest;
