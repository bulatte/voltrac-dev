"use client";

import { usePathname, useRouter, getPathname } from "@/i18n/navigation";
import { locales, routing } from "@/i18n/routing";
import { Locale, useLocale } from "next-intl";
import { useParams } from "next/navigation";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: Locale) {
    // // Find the domain configured for the target locale (if any)
    // const domainForLocale = routing.domains?.find((d) =>
    //   (d.locales as readonly string[]).includes(String(nextLocale)),
    // )?.domain;

    // // Build the path (with dynamic params resolved)
    // // @ts-expect-error -- getPathname is provided by next-intl's createNavigation
    // const resolvedPath = getPathname(pathname, params);

    // // If the target domain is different from the current host, do a full navigation
    // // to switch origins. Client-side routing cannot change the host.
    // try {
    //   const currentHost = window.location.host;
    //   if (domainForLocale && domainForLocale !== currentHost) {
    //     const href = `${window.location.protocol}//${domainForLocale}${resolvedPath}${window.location.search}${window.location.hash}`;
    //     // Hard navigation to the other domain to ensure cookies and origin change
    //     window.location.href = href;
    //     return;
    //   }
    // } catch {
    //   // window may be undefined in some environments; fall back to client-side router
    // }

    // Same-origin: use client-side replace to change locale without reload
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale },
    );
  }

  return (
    <div className="relative after:content-['▼'] after:text-[5px] after:absolute after:right-1.5 after:top-1/2 after:-translate-y-1/5 after:pointer-events-none after:text-white after:text-subtitle-s">
      <select
        className="uppercase p-1 pr-4 text-subtitle-s border border-white-25 rounded-xs appearance-none"
        value={locale}
        onChange={(e) => onSelectChange(e.target.value as Locale)}
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );

  // return (
  //   <Select value={locale} onValueChange={onSelectChange}>
  //     <SelectTrigger className="uppercase text-subtitle-s p-1 rounded-xs !h-auto">
  //       <SelectValue />
  //     </SelectTrigger>
  //     <SelectContent className="uppercase">
  //       {locales.map((l) => (
  //         <SelectItem key={l} value={l}>
  //           {l}
  //         </SelectItem>
  //       ))}
  //     </SelectContent>
  //   </Select>
  // );
};

export default LanguageSwitcher;
