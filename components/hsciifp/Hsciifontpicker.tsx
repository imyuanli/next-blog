"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import fgioptions from "./fgioptions_sel.json";
import { hsciifont_classnames } from "./hsciifonts";

const Hsciifontpicker = () => {
  const handle_fitem_change = (curr_selected_fitem: string) => {
    if (curr_selected_fitem) { setBodyFont(curr_selected_fitem); }
  };
  const setBodyFont = (selected_hsciifont_name: string) => {
    document.body.classList.value = document.body.classList.value.replaceAll(/__className_\w+\s+antialiased/g, "");
    document.body.classList.value = document.body.classList.value.replaceAll(/antialiased\s+__className_\w+/g, "");
    document.body.classList.add(hsciifont_classnames[selected_hsciifont_name]);
    document.body.classList.add("antialiased");
  };
  return (
    <div>
      <Select onValueChange={handle_fitem_change}>
        <SelectTrigger className="w-[180px] mt-4"> <SelectValue placeholder="hscii_font=>select" /> </SelectTrigger>
        <SelectContent>
          {fgioptions.map((fgioption) => (
            <SelectItem key={fgioption.walue} value={fgioption.walue}>
              {fgioption.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Hsciifontpicker;
