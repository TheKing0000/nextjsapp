"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface IFilter {
  filters: { name: string; value: string }[];
  otherClasses?: string;
  containerClasses?: string;
}
export default function Filter({
  filters,
  otherClasses,
  containerClasses,
}: IFilter) {
  const active = "frequent";
  return (
    <div className={`relative `}>
      <div className="block md:hidden">
        <Select>
          <SelectTrigger
            className={`body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5 ${otherClasses}`}
          >
            <div className="line-clamp-1 flex-1 text-left">
              <SelectValue placeholder="Select a Filter" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {filters.map((currentTag) => {
                return (
                  <SelectItem key={currentTag.value} value={currentTag.value}>
                    {currentTag.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-10 hidden flex-row flex-wrap gap-3 md:flex">
        {filters.map((currentTag) => {
          return (
            <Button
              key={currentTag.value}
              className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
                active === currentTag.value
                  ? "bg-primary-100 text-primary-500 dark:bg-dark-300"
                  : "bg-light-800 text-light-500  dark:bg-dark-300 dark:text-light-500"
              }`}
            >
              {currentTag.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
