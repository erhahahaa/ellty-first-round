
import { useState } from "react";
import { Checkbox } from "./checkbox";
import { Card, CardItem } from "./card";
import { Button } from "./button";
import { Separator } from "./separator";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Pages 5", "Pages 6"];

export const Pages = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const allChecked = selected.length === pages.length;
  const indeterminate =
    selected.length > 0 && selected.length < pages.length;

  return (
    <Card className="w-92.5 h-81.5">

      <CardItem>
        <Checkbox
          label="All pages"
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={(checked) =>
            setSelected(checked ? pages : [])
          }
        />
      </CardItem>
      <div className="py-2.5 px-3.75">
        <Separator />
      </div>
      <div className="scroll-auto max-h-41 overflow-y-auto hide-scrollbar" >
        {pages.map((page) => (
          <CardItem>
            <Checkbox
              key={page}
              label={page}
              checked={selected.includes(page)}
              onChange={(checked) =>
                setSelected((prev) =>
                  checked
                    ? [...prev, page]
                    : prev.filter((p) => p !== page)
                )
              }
            />
          </CardItem>
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


