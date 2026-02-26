import { all_routes } from "../../routes/all_routes";

const route = all_routes;

export const SidebarData = [
  {
    label: "Main",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Main",
    submenuItems: [
      {
        label: "Dashboard",
        icon: "layout-grid",
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Admin Dashboard", link: "/index" },
          { label: "Admin Dashboard 2", link: "/admin-dashboard" },
          { label: "Sales Dashboard", link: "/sales-dashboard" },
        ],
      },
    ],
  },
  {
    label: "Inventory",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Inventory",
    submenuItems: [
      {
        label: "Products",
        link: "/product-list",
        icon: "box",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Create Product",
        link: "/add-product",
        icon: "table-plus",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Category",
        link: "/category-list",
        icon: "list-details",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Sub Category",
        link: "/sub-categories",
        icon: "carousel-vertical",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Brands",
        link: "/brand-list",
        icon: "triangles",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Units",
        link: "/units",
        icon: "brand-unity",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Variant Attributes",
        link: "/variant-attributes",
        icon: "checklist",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Warranties",
        link: "/warranty",
        icon: "certificate",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Print Barcode",
        link: "/barcode",
        icon: "barcode",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Print QR Code",
        link: "/qrcode",
        icon: "qrcode",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },
  {
    label: "Stock",
    submenuOpen: true,
    submenuHdr: "Stock",
    submenu: true,
    showSubRoute: false,
    submenuItems: [
      {
        label: "Manage Stock",
        link: "/manage-stocks",
        icon: "stack-3",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },
  {
    label: "Sales",
    submenuOpen: true,
    submenuHdr: "Sales",
    submenu: false,
    showSubRoute: false,
    submenuItems: [
      {
        label: "Sales",
        icon: "layout-grid",
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          {
            label: "Online Orders",
            link: route.onlineorder,
            showSubRoute: false,
          },
          { label: "POS Orders", link: route.posorder, showSubRoute: false },
        ],
      },
      {
        label: "Invoices",
        link: route.invoice,
        icon: "file-invoice",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Sales Return",
        link: "/sales-returns",
        icon: "receipt-refund",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Quotation",
        link: "/quotation-list",
        icon: "files",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "POS",
        icon: "device-laptop",
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "POS 1", link: "/pos", showSubRoute: false },
          { label: "POS 2", link: "/pos-2", showSubRoute: false },
          { label: "POS 3", link: "/pos-3", showSubRoute: false },
          { label: "POS 4", link: "/pos-4", showSubRoute: false },
          { label: "POS 5", link: "/pos-5", showSubRoute: false },
          { label: "POS 6", link: "https://dreamspos.dreamstechnologies.com/laundry-pos/reactjs/template/login", showSubRoute: false,external: true  },
        ],
      },
    ],
  },
  {
    label: "Promo",
    submenuOpen: true,
    submenuHdr: "Promo",
    showSubRoute: false,
    submenuItems: [
      {
        label: "Coupons",
        link: "/coupons",
        icon: "ticket",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Gift Cards",
        link: route.GiftCard,
        icon: "cards",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Discount",
        icon: "file-percent",
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          {
            label: "Discount Plan",
            link: route.discountPlan,
            showSubRoute: false,
          },
          { label: "Discount", link: route.discount, showSubRoute: false },
        ],
      },
    ],
  },
  {
    label: "Purchases",
    submenuOpen: true,
    submenuHdr: "Purchases",
    showSubRoute: false,
    submenuItems: [
      {
        label: "Purchases",
        link: "/purchase-list",
        icon: "shopping-bag",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Purchase Order",
        link: "/purchase-order-report",
        icon: "file-unknown",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Purchase Return",
        link: "/purchase-returns",
        icon: "file-upload",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },

  {
    label: "Finance & Accounts",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Finance & Accounts",
    submenuItems: [
      {
        label: "Balance Sheet",
        link: "/balance-sheet",
        icon: "report-money",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Trial Balance",
        link: "/trial-balance",
        icon: "alert-circle",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },

  {
    label: "People",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "People",

    submenuItems: [
      {
        label: "Customers",
        link: route.customers,
        icon: "users-group",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Billers",
        link: "/billers",
        icon: "user-up",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Suppliers",
        link: "/suppliers",
        icon: "user-dollar",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Stores",
        link: "/store-list",
        icon: "home-bolt",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Warehouses",
        link: "/warehouse",
        icon: "archive",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },

  {
    label: "Reports",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Reports",
    submenuItems: [
      {
        label: "Sales Report",
        icon: "chart-bar",
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Sales Report", link: "/sales-report" },
          { label: "Best Seller", link: "/best-seller" },
        ],
      },
      {
        label: "Purchase Report",
        link: "/purchase-report",
        icon: "chart-pie-2",
        showSubRoute: false,
      },
      {
        label: "Inventory Report",
        icon: "triangle-inverted",
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Inventory Report", link: "/inventory-report" },
          { label: "Stock History", link: "/stock-history" },
          { label: "Sold Stock", link: "/sold-stock" },
        ],
      },
      {
        label: "Invoice Report",
        link: route.invoicereportnew,
        icon: "businessplan",
        showSubRoute: false,
      },
      {
        label: "Supplier Report",
        icon: "user-star",
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Supplier Report", link: "/supplier-report" },
          { label: "Supplier Due Report", link: "/supplier-due-report" },
        ],
      },
      {
        label: "Customer Report",

        icon: "report",
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Customer Report", link: "/customer-report" },
          { label: "Customer Due Report", link: "/customer-due-report" },
        ],
      },
      {
        label: "Product Report",
        icon: "report-analytics",
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Product Report", link: "/product-report" },
          { label: "Product Expiry Report", link: "/product-expiry-report" },
          {
            label: "Product Quantity Alert",
            link: route.productquantityreport,
          },
        ],
      },
      {
        label: "Expense Report",
        link: "/expense-report",
        icon: "file-vector",
        showSubRoute: false,
      },
      {
        label: "Income Report",
        link: "/income-report",
        icon: "chart-ppf",
        showSubRoute: false,
      },
      {
        label: "Tax Report",
        link: "/tax-report",
        icon: "chart-dots-2",
        showSubRoute: false,
      },
      {
        label: "Profit & Loss",
        link: "/profit-loss-report",
        icon: "chart-donut",
        showSubRoute: false,
      },
      {
        label: "Annual Report",
        link: "/annual-report",
        icon: "report-search",
        showSubRoute: false,
      },
    ],
  },

  {
    label: "User Management",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "User Management",
    submenuItems: [
      {
        label: "Users",
        link: "/users",
        icon: "shield-up",
        showSubRoute: false,
      },
      {
        label: "Roles & Permissions",
        link: "/roles-permissions",
        icon: "jump-rope",
        showSubRoute: false,
      },
      {
        label: "Delete Account Request",
        link: "/delete-account",
        icon: "trash-x",
        showSubRoute: false,
      },
    ],
  },

  {
    label: "Settings",
    submenu: true,
    showSubRoute: false,
    submenuHdr: "Settings",
    submenuItems: [
      {
        label: "General Settings",
        submenu: true,
        showSubRoute: false,
        icon: "settings",
        submenuItems: [
          { label: "Profile", link: "/general-settings" },
          { label: "Security", link: "/security-settings" },
          { label: "Notifications", link: "/notification" },
          { label: "Connected Apps", link: "/connected-apps" },
        ],
      },
      {
        label: "Website Settings",
        submenu: true,
        showSubRoute: false,
        icon: "world",
        submenuItems: [
          {
            label: "System Settings",
            link: "/system-settings",
            showSubRoute: false,
          },
          {
            label: "Company Settings",
            link: "/company-settings",
            showSubRoute: false,
          },
          {
            label: "Localization",
            link: "/localization-settings",
            showSubRoute: false,
          },
          { label: "Prefixes", link: "/prefixes", showSubRoute: false },
          { label: "Preference", link: "/preference", showSubRoute: false },
          { label: "Appearance", link: "/appearance", showSubRoute: false },
          {
            label: "Social Authentication",
            link: "/social-authentication",
            showSubRoute: false,
          },
          {
            label: "Language",
            link: "/language-settings",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "App Settings",
        submenu: true,

        showSubRoute: false,
        icon: "device-mobile",
        submenuItems: [
          {
            label: "Invoice",
            link: "/invoice-settings",
            showSubRoute: false,
            submenu: true,
            submenuItems: [
              { label: "Invoice Settings", link: "/invoice-settings" },
              { label: "Invoice Template", link: "/invoice-template" },
            ],
          },
          { label: "Printer", link: "/printer-settings", showSubRoute: false },
          { label: "POS", link: "/pos-settings", showSubRoute: false },
          {
            label: "Custom Fields",
            link: "/custom-fields",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "System Settings",
        submenu: true,
        showSubRoute: false,
        icon: "device-desktop",
        submenuItems: [
          {
            label: "Email",
            link: "/email-settings",
            showSubRoute: false,
            submenu: true,
            submenuItems: [
              { label: "Email Settings", link: "/email-settings" },
              { label: "Email Template", link: "/email-template" },
            ],
          },
          {
            label: "SMS Gateways",
            link: "/sms-gateway",
            showSubRoute: false,
            submenu: true,
            submenuItems: [
              { label: "SMS Settings", link: "/sms-settings" },
              { label: "SMS Template", link: route.smstemplate },
            ],
          },
          { label: "OTP", link: "/otp-settings", showSubRoute: false },
          {
            label: "GDPR Cookies",
            link: "/gdpr-settings",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "Financial Settings",
        submenu: true,
        showSubRoute: false,
        icon: "settings-dollar",
        submenuItems: [
          {
            label: "Payment Gateway",
            link: "/payment-gateway-settings",
            showSubRoute: false,
          },
          {
            label: "Bank Accounts",
            link: "/bank-settings-grid",
            showSubRoute: false,
          },
          { label: "Tax Rates", link: "/tax-rates", showSubRoute: false },
          {
            label: "Currencies",
            link: "/currency-settings",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "Other Settings",
        submenu: true,
        showSubRoute: false,
        icon: "settings-2",
        submenuItems: [
          { label: "Storage", link: "/storage-settings", showSubRoute: false },
          {
            label: "Ban IP Address",
            link: "/ban-ip-address",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "Logout",
        link: "/signin",
        icon: "logout",
        showSubRoute: false,
      },
    ],
  },

];
