import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  ShoppingBag as ShoppingBagIcon,
  LocalHospital as LocalHospitalIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function NavbarCustomer() {
  return (
    <Box
      component="aside"
      sx={{
        width: { xs: '100%', md: 280 },
        bgcolor: '#FFFFFF',
        borderRadius: 2,
        boxShadow: 2,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {/* Avatar and name */}
      <Avatar sx={{ width: 96, height: 96, bgcolor: 'grey.300' }} />
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        Nguyen Van A
      </Typography>
      <Button
        component={RouterLink}
        to="/profile/edit"
        variant="contained"
        sx={{
          bgcolor: '#C76A3F',
          color: '#FFFFFF',
          textTransform: 'none',
          '&:hover': { bgcolor: '#A14E2E' },
        }}
      >
        Sửa Hồ Sơ
      </Button>

      <Divider sx={{ width: '100%', my: 2 }} />

      {/* Menu links */}
      <List sx={{ width: '100%', pl: 1 }}>
        <ListItemButton component={RouterLink} to="/notifications">
          <ListItemIcon>
            <NotificationsIcon sx={{ color: '#C76A3F' }} />
          </ListItemIcon>
          <ListItemText primary="Thông báo" primaryTypographyProps={{ fontWeight: 600, color: '#C76A3F' }} />
        </ListItemButton>

        <Box sx={{ pl: 3 }}>
          <ListItemButton component={RouterLink} to="/profile/info">
            <ListItemIcon>
              <AccountCircleIcon sx={{ color: '#C76A3F' }} />
            </ListItemIcon>
            <ListItemText primary="Tài Khoản Của tôi" primaryTypographyProps={{ fontWeight: 600, color: '#C76A3F' }} />
          </ListItemButton>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/profile/bookings">
              <ListItemText primary="Xem lịch đã đặt" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/profile/bank">
              <ListItemText primary="Ngân Hàng" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/profile/address">
              <ListItemText primary="Địa Chỉ" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/profile/change-password">
              <ListItemText primary="Đổi Mật Khẩu" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/profile/notifications-settings">
              <ListItemText primary="Cài Đặt Thông Báo" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/profile/privacy">
              <ListItemText primary="Những Thiết Lập Riêng Tư" />
            </ListItemButton>
          </List>
        </Box>

        <ListItemButton component={RouterLink} to="/profile/orders">
          <ListItemIcon>
            <ShoppingBagIcon sx={{ color: '#C76A3F' }} />
          </ListItemIcon>
          <ListItemText primary="Đơn Mua" primaryTypographyProps={{ fontWeight: 600, color: '#C76A3F' }} />
        </ListItemButton>

        <ListItemButton component={RouterLink} to="/profile/appointments">
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: '#C76A3F' }} />
          </ListItemIcon>
          <ListItemText primary="Lịch khám" primaryTypographyProps={{ fontWeight: 600, color: '#C76A3F' }} />
        </ListItemButton>
      </List>
    </Box>
  );
}
