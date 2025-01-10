import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SkincareHomeWithFooter() {
  const featuredProducts = [
    {
      id: '1',
      name: 'Facial Cleanser',
      price: 'Rp 80,000',
      image: 'https://tse3.mm.bing.net/th?id=OIP.2GICSQ38WdcTA8UYsHtNywAAAA&w=474&h=474&c=7',
    },
    {
      id: '2',
      name: 'Hydrating Serum',
      price: 'Rp 120,000',
      image: 'https://tse3.mm.bing.net/th?id=OIP.CafDHzfEaljW_LW2Dtr6rQHaI0&w=474&h=474&c=7',
    },
    {
      id: '3',
      name: 'Sunscreen SPF 50',
      price: 'Rp 150,000',
      image: 'https://tse1.mm.bing.net/th?id=OIP.jR5-jnUR9iXDQCOAHQrIVQHaHa&w=200&h=200&c=7',
    },
    {
      id: '1',
      name: 'Facial Cleanser',
      price: 'Rp 80,000',
      image: 'https://tse3.mm.bing.net/th?id=OIP.2GICSQ38WdcTA8UYsHtNywAAAA&w=474&h=474&c=7',
    },
    {
      id: '2',
      name: 'Hydrating Serum',
      price: 'Rp 120,000',
      image: 'https://tse3.mm.bing.net/th?id=OIP.CafDHzfEaljW_LW2Dtr6rQHaI0&w=474&h=474&c=7',
    },
    {
      id: '3',
      name: 'Sunscreen SPF 50',
      price: 'Rp 150,000',
      image: 'https://tse1.mm.bing.net/th?id=OIP.jR5-jnUR9iXDQCOAHQrIVQHaHa&w=200&h=200&c=7',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Your Skincare Dashboard</Text>
          <Text style={styles.headerSubtitle}>Monitor sales, orders, and transactions in one place</Text>
        </View>

        {/* Quick Metrics */}
        <View style={styles.metrics}>
          <View style={styles.metricCard}>
            <Ionicons name="cash-outline" size={24} color="#FFFFFF" />
            <Text style={styles.metricValue}>Rp 3,000,000</Text>
            <Text style={styles.metricLabel}>Today's Sales</Text>
          </View>
          <View style={styles.metricCard}>
            <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
            <Text style={styles.metricValue}>8</Text>
            <Text style={styles.metricLabel}>Pending Orders</Text>
          </View>
          <View style={styles.metricCard}>
            <Ionicons name="receipt-outline" size={24} color="#FFFFFF" />
            <Text style={styles.metricValue}>15</Text>
            <Text style={styles.metricLabel}>Transactions</Text>
          </View>
        </View>

        {/* Best Sellers */}
        <Text style={styles.sectionTitle}>Best Sellers</Text>
        <View style={styles.bestSellersContainer}>
          {featuredProducts.map((item) => (
            <View key={item.id} style={styles.bestSellerCard}>
              <Image source={{ uri: item.image }} style={styles.bestSellerImage} />
              <View style={styles.bestSellerDetails}>
                <Text style={styles.bestSellerName}>{item.name}</Text>
                <Text style={styles.bestSellerPrice}>{item.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>💖 Keep glowing, keep selling! 💖</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#1E88E5',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#BBDEFB',
    marginTop: 8,
    textAlign: 'center',
  },
  metrics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  metricCard: {
    backgroundColor: '#42A5F5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '30%',
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 8,
  },
  metricLabel: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 16,
    marginBottom: 8,
  },
  bestSellersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  bestSellerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 2,
    marginBottom: 16,
    width: '45%',
    alignItems: 'center',
    padding: 10,
    overflow: 'hidden',
  },
  bestSellerImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  bestSellerDetails: {
    alignItems: 'center',
  },
  bestSellerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  bestSellerPrice: {
    fontSize: 14,
    color: '#1E88E5',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#1E88E5',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
