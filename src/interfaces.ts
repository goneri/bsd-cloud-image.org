export interface ImagesDefType {
  flavor: string;
  url: string;
  python_interpreter: string;
}

export interface VersionDefType {
  name: string;
  images: ImagesDefType[];
  hidden?: boolean;
}

//@ts-ignore
export interface OSDefType {
  name: string;
  versions: VersionDefType[];
}
