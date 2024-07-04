export function resetValues(obj: Record<string, any>): Record<string, any> {
  if (!obj) return {};
  const data = Object.keys(obj);

  const parsed = data.reduce((acc, cur) => {
    if (typeof obj[cur] === "string") acc[cur] = "";
    else if (typeof obj[cur] === "number") acc[cur] = 0;
    else if (typeof obj[cur] === "boolean") acc[cur] = false;
    else if (Array.isArray(obj[cur])) acc[cur] = [];
    else acc[cur] = "";

    return acc;
  }, {} as Record<string, any>);

  return parsed;
}
