
import { useState, useCallback, memo } from "react";
import { Checkbox } from "./checkbox";
import { Card, CardItem } from "./card";
import { Button } from "./button";
import { Separator } from "./separator";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Pages 5", "Pages 6"];

const PageCheckboxItem = memo(({ page, isChecked, onChange }: {
  page: string;
  isChecked: boolean;
  onChange: (page: string, checked: boolean) => void;
}) => (
  <CardItem>
    <Checkbox
      label={page}
      checked={isChecked}
      onChange={(checked) => onChange(page, checked)}
    />
  </CardItem>
));


export const Pages = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const allChecked = selected.length === pages.length;
  const indeterminate =
    selected.length > 0 && selected.length < pages.length;

  const handleAllPagesChange = useCallback((checked: boolean) => {
    setSelected(checked ? pages : []);
  }, []);

  const handlePageChange = useCallback((page: string, checked: boolean) => {
    setSelected((prev) => {
      const newSelected = checked
        ? [...prev, page]
        : prev.filter((p) => p !== page);
      return newSelected;
    });
  }, []);

  return (
    <Card className="w-92.5 h-81.5">

      <CardItem>
        <Checkbox
          label="All pages"
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleAllPagesChange}
        />
      </CardItem>
      <div className="py-2.5 px-3.75">
        <Separator />
      </div>
      <div className="scroll-auto max-h-41 overflow-y-auto hide-scrollbar" >
        {pages.map((page) => (
          <PageCheckboxItem
            key={page}
            page={page}
            isChecked={selected.includes(page)}
            onChange={handlePageChange}
          />
        ))}
      </div>
      <div className="py-2.5 px-3.75">
        <Separator />
      </div>
      <div className="py-2.5 px-3.75">
        <Button>
          Done
        </Button>
      </div>
    </Card>

  );
}


