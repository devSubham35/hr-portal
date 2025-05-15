import React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const SelectDate = ({
  className,
  date,
  onDateSelect,
  numberOfMonths = 1,
  yearsRange = 10,
  closeOnSelect = false,
  clear = false
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [month, setMonth] = React.useState(date?.from ? new Date(date.from) : new Date());

  // Generate years array for the dropdown
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1950 + 1 },
    (_, i) => 1900 + i
  );

  const handleSelect = (selectedDate) => {
    if (selectedDate) {
      const from = selectedDate.from || selectedDate;
      const to = numberOfMonths === 2 ? selectedDate.to || from : from;

      onDateSelect({ from, to });
      if (closeOnSelect) setIsOpen(false);
    }
  };

  const handleMonthChange = (monthName) => {
    const newDate = new Date(month);
    newDate.setMonth(months.indexOf(monthName));
    setMonth(newDate);
  };

  const handleYearChange = (year) => {
    const newDate = new Date(month);
    newDate.setFullYear(parseInt(year));
    setMonth(newDate);
  };

  const handleClearSelection = () => {
    onDateSelect(null);
    setMonth(new Date());
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-full justify-start text-left font-normal", className)}
          aria-label="Select date"
        >
          <CalendarIcon className="mb-1 h-4 w-4 text-emerald-500" />
          {date?.from ? (
            numberOfMonths === 2 && date.to ? (
              <>
                {format(date.from, "dd MMM yyyy")} - {format(date.to, "dd MMM yyyy")}
              </>
            ) : (
              format(date.from, "dd MMM yyyy")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0">
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex space-x-2">

            <Select
              value={months[month.getMonth()]}
              onValueChange={handleMonthChange}
            >
              <SelectTrigger className="w-1/2 outline-none !text-[12px] font-medium">
                <SelectValue placeholder="Month" />
              </SelectTrigger>

              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month} value={month} className="cursor-pointer text-[12px] font-medium">
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={month.getFullYear().toString()}
              onValueChange={handleYearChange}
            >
              <SelectTrigger className="w-1/2 !text-[12px] font-medium">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()} className="cursor-pointer text-[12px] font-medium" >
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {clear &&
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleClearSelection} aria-label="Clear date selection">
                Clear
              </Button>
            </div>
          }

          <div className="w-full flex justify-center items-center">
            <Calendar
              mode={numberOfMonths === 2 ? "range" : "single"}
              selected={date}
              onSelect={handleSelect}
              month={month}
              onMonthChange={setMonth}
              numberOfMonths={numberOfMonths}
              className="rounded-md w-full flex justify-center items-center p-0 border-0"
            />
          </div>

        </div>
      </PopoverContent>

    </Popover>
  );
};

export default SelectDate;
